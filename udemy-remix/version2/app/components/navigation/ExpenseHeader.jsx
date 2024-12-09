import { NavLink, Form, Link } from '@remix-run/react'

import Logo from '../util/Logo'

function ExpensesHeader() {

  const Login = (
    <Link to="auth" className="cta">
      Login
    </Link>
  )
  const Logout = (
    <Form method="post" action="../logout" className="form logout">
      <button type="submit">Logout</button>
    </Form>
  )
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/expenses" end>
              Manage Expenses
            </NavLink>
          </li>
          <li>
            <NavLink to="/expenses/analysis">Analyze Expenses</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">{true ? Logout : Login}</nav>
    </header>
  )
}

export default ExpensesHeader
