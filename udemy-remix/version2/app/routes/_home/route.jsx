import { Outlet, useLoaderData } from '@remix-run/react'
import marketingStyles from '~/styles/marketing.css'
import MainHeader from '~/components/navigation/MainHeader'
import { getUserFromSession } from '~/components/util/auth.server'

function MainLayout() {
  const data = useLoaderData()

  return (
    <>
      <MainHeader userId={data} />
      <Outlet />
    </>
  )
}

export default MainLayout

export function links() {
  return [
    { rel: 'stylesheet', href: marketingStyles },
  ]
}

export function loader({ request }) {
  return getUserFromSession(request)
}
