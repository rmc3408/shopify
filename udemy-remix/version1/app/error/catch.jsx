import { Link, useRouteError } from '@remix-run/react'

export function NoNotes() {
  const error = useRouteError()

  return (
    <main className="error">
      <h1>{error.status}</h1>
      <h4>{error.statusText}</h4>
      <p>{error.data?.message || 'Something went wrong!'}</p>
      <p>
        Back to <Link to="/">safety</Link>!
      </p>
    </main>
  )
}
