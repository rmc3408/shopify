import { Outlet } from '@remix-run/react'
import React from 'react'
import expenseStyles from '~/styles/expenses.css'
import ExpensesHeader from '../components/navigation/ExpenseHeader'

function AppLayout() {
  return (
    <>
      <ExpensesHeader />
      <Outlet />
    </>
  )
}

export default AppLayout

export function links() {
  return [{ rel: 'stylesheet', href: expenseStyles }]
}
