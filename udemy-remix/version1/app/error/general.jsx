import { Link, Links, Meta, Scripts } from '@remix-run/react'

export function GeneralError({ error }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>An General error occurred!</title>
      </head>
      <body>
        <main className="error">
          <h1>General error occurred!</h1>
          <p>{error.message}</p>
          <p>
            Back to <Link to="/">safety</Link>!
          </p>
        </main>
        <Scripts />
      </body>
    </html>
  )
}
