import { Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useRouteError } from '@remix-run/react'
import sharedStyles from '~/styles/shared.css'
import Error from '~/components/util/Error'

export const meta = () => ({
  charset: "utf-8",
  title: "Dive Deep Version 2",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function Document({ title, children }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap" rel="stylesheet" />
        <Links />
      </head>
      <body>
        { children }
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export function links() {
  return [{ rel: 'stylesheet', href: sharedStyles }]
}

export function CatchBoundary() {
  const caughtResponse = useRouteError()

  return (
    <Document title={caughtResponse.statusText}>
      <main>
        <Error title={caughtResponse.statusText}>
          <p>{caughtResponse.data?.message || 'GENERAL ERROR. Please try again later.'}</p>
          <p>Back to <Link to="/">safety</Link></p>
        </Error>
      </main>
    </Document>
  )
}

export function ErrorBoundary({ error }) {
  return (
    <Document title="An error occurred">
      <main>
        <Error title="An error occurred">
          <p>{error.message || 'Something went wrong. Please try again later.'}</p>
          <p>
            Back to <Link to="/">safety</Link>.
          </p>
        </Error>
      </main>
    </Document>
  )
}
