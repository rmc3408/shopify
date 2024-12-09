import { FaLock, FaUserPlus } from 'react-icons/fa';
import { Link, Form, useSearchParams, useNavigation, useActionData } from '@remix-run/react'

function AuthForm() {
  const [ searchParams ] = useSearchParams()
  const nav = useNavigation()
  const postData = useActionData()
  const authMode = searchParams.get('mode')

  const btnMode = authMode === 'login' ? 'login' : 'SignUp'
  const toogleMode = authMode === 'login' ? 'Create a new user' : 'Login into your account'
  const pathMode = authMode === 'login' ? 'signup' : 'login'
  const isSubmitting = nav.state !== 'idle'

  return (
    <Form method="post" className="form" id="auth-form">
      <div className="icon-img">{authMode === 'login' ? <FaLock /> : <FaUserPlus />}</div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="text" id="email" name="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </p>
      {postData && (
        <ul>
          {Object.values(postData).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <div className="form-actions">
        <button disabled={isSubmitting}>{btnMode}</button>
        <Link to={`?mode=${pathMode}`}>{toogleMode}</Link>
      </div>
    </Form>
  )
}

export default AuthForm;
