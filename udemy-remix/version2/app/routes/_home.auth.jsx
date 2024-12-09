import AuthForm from '~/components/auth/AuthForm'
import { login, signup } from '~/components/util/auth.server'
import { validateCredentials } from '~/components/util/validation.server'
import styles from '~/styles/auth.css'

export default function Auth() {
  return <AuthForm />
}

export async function action(ctx) {
  const searchParams = new URL(ctx.request.url).searchParams
  const isSignUp = searchParams.get('mode') ?? 'signup'

  const formData = await ctx.request.formData()
  const auth = Object.fromEntries(formData)

  try {
    validateCredentials(auth)

    if (isSignUp === 'signup') {
      return await signup(auth)
    } else {
      return await login(auth)
    }
  } catch (error) {
    if (error.status === 422) {
      error.message = 'A user with same email already exists';
      return { credentials: error.message }
    }
  }
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}
