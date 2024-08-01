import { Link, Outlet } from '@remix-run/react'
import React from 'react'
import ExpenseList from '../../components/expenses/ExpensesList'
import { FaDownload, FaPlus } from 'react-icons/fa'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'First Expense',
    amount: 12.99,
    date: new Date().toISOString(),
  },
  {
    id: 'e2',
    title: 'Second Expense',
    amount: 16.99,
    date: new Date().toISOString(),
  },
]

function ExpenseLayout() {
  return (
    <>
      <Outlet />
      <section id="expenses-actions">
        <Link to="add">
          <FaPlus />
          <span>Add Expense</span>
        </Link>
        <a href="/expense/raw"><FaDownload />Raw data</a>
      </section>
      <ExpenseList expenses={DUMMY_EXPENSES} />
    </>
  )
}

export default ExpenseLayout
