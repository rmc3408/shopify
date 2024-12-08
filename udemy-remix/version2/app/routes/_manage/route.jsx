import { Link, Outlet } from '@remix-run/react'
import { FaDownload, FaPlus } from 'react-icons/fa'

export default function ManageLayout() {
  return (
    <>
      <Outlet />
      <section id="expenses-actions">
        <Link to="add">
          <FaPlus />
          <span>Add Expense</span>
        </Link>
        <a href="/expenses/raw">
          <FaDownload />
          Raw data
        </a>
      </section>
    </>
  )
}
