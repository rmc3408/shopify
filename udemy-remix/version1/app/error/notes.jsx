import { Link, Links, LiveReload, Meta, Scripts } from '@remix-run/react'

export function NotesError({ error }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <main className="error">
          <h1>Not possible to work with notes - error occurred!!</h1>
          <p>{error.message}</p>
          <p>
            Back to <Link to="/">safety</Link>!
          </p>
        </main>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
