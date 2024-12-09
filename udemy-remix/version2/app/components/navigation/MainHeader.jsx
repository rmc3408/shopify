import { Link, NavLink, Form } from '@remix-run/react';
import Logo from '../util/Logo';

function MainHeader({ userId }) {
  const Login = (
    <Link to="auth" className="cta">
      Login
    </Link>
  )
  const Logout = (
    <Form method="post" action="/logout" className="form logout">
      <button type="submit">Logout</button>
    </Form>
  )

  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <ul>
          <li>
            {userId ? Logout : Login}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader;
