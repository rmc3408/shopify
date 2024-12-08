import { useRouteLoaderData } from '@remix-run/react'
import ExpenseList from '~/components/expenses/ExpensesList'
import { deleteExpense } from 'mongo/expense.server'
import ManageLayout from './_manage/route'

function ExpenseLayout() {
  const data = useRouteLoaderData('routes/_expenses')

  return (
    <>
      <ManageLayout />
      <ExpenseList expenses={data} />
    </>
  )
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
