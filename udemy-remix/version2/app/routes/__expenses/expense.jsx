import { Link, Outlet, useLoaderData } from '@remix-run/react'
import ExpenseList from '../../components/expenses/ExpensesList'
import { FaDownload, FaPlus } from 'react-icons/fa'
import { deleteExpense, getExpense } from 'mongo/expense.server'
import { json } from '@remix-run/node'

function ExpenseLayout() {
  const data = useLoaderData()

  return (
    <>
      <Outlet />
      <section id="expenses-actions">
        <Link to="add">
          <FaPlus />
          <span>Add Expense</span>
        </Link>
        <a href="/expense/raw">
          <FaDownload />
          Raw data
        </a>
      </section>
      <ExpenseList expenses={data} />
    </>
  )
}

// export function loader() {
//   return getExpense()
// }

export async function loader() {
  const rawData = await getExpense()
  return json(rawData, { status: 200, statusText: 'Data Fetched' })
}

export async function action(ctx) {
  if (ctx.request['method'] === 'DELETE') {
      const formData = await ctx.request.formData()
    const selectedId = formData.get('id')
    return deleteExpense(selectedId)
  }
  return null
}

export default ExpenseLayout
