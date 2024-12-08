import { Outlet } from '@remix-run/react'
import marketingStyles from '~/styles/marketing.css'
import MainHeader from '~/components/navigation/MainHeader'

function MainLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  )
}

export default MainLayout

export function links() {
  return [{ rel: 'stylesheet', href: marketingStyles }]
}
