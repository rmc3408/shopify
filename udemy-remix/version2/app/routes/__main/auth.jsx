import styles from '~/styles/auth.css'
import AuthForm from '~/components/auth/AuthForm'

export default function Auth() {
  return <AuthForm />
}

export async function action(ctx) {
  const searchParams = new URL(ctx.request.url).searchParams
  const isLogin = searchParams.get('mode') ?? 'login'

  const formData = await ctx.request.formData()
  const auth = Object.fromEntries(formData)
  return {}
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}