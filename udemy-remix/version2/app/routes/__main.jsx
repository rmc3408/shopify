import { Outlet } from '@remix-run/react'
import React from 'react'
import marketingStyles from '~/styles/marketing.css'
import MainHeader from '../components/navigation/MainHeader'

function MarketLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  )
}

export default MarketLayout

export function links() {
  return [{ rel: 'stylesheet', href: marketingStyles }]
}
