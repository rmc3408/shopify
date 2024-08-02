import { Outlet } from '@remix-run/react'
import expenseStyles from '~/styles/expenses.css'
import ExpensesHeader from '../components/navigation/ExpenseHeader'

function ExpenseLayout() {
  return (
    <>
      <ExpensesHeader />
      <Outlet />
    </>
  )
}

export default ExpenseLayout

export function links() {
  return [{ rel: 'stylesheet', href: expenseStyles }]
}
