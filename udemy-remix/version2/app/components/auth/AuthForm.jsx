import { FaLock, FaUserPlus } from 'react-icons/fa';
import { Link, useSearchParams } from '@remix-run/react'

function AuthForm() {
  const [ searchParams ] = useSearchParams()
  const authMode = searchParams.get('mode')

  const btnMode = authMode === 'login' ? 'login' : 'SignUp'
  const toogleMode = authMode === 'login' ? 'Create a new user' : 'Login into your account'
  const pathMode = authMode === 'login' ? 'signup' : 'login'

  return (
    <form method="post" className="form" id="auth-form">
      <div className="icon-img">
        {authMode === 'login' ? <FaLock /> : <FaUserPlus /> }
      </div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
        <button>{btnMode}</button>
        <Link to={`?mode=${pathMode}`}>{toogleMode}</Link>
      </div>
    </form>
  )
}

export default AuthForm;
