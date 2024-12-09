import { Outlet } from '@remix-run/react'
import expenseStyles from '~/styles/expenses.css'
import ExpensesHeader from '~/components/navigation/ExpenseHeader'
import { getExpense } from 'mongo/expense.server'
import { json } from '@remix-run/node'
import { requireUserSession } from '~/components/util/auth.server'

function ExpenseLayout() {
  return (
    <>
      <ExpensesHeader />
      <Outlet />
    </>
  )
}

export default ExpenseLayout

export async function loader({request}) {
  const isValidUser = await requireUserSession(request)

  if (!isValidUser) return null;
  
  const rawData = await getExpense()
  return json(rawData, { status: 200, statusText: 'Data Fetched' })
}

export function links() {
  return [{ rel: 'stylesheet', href: expenseStyles }]
}
