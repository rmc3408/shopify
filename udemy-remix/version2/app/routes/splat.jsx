import { redirect } from '@remix-run/node'

//////////////////////
//
// RENAME FILE AS $.JSX
//
//////////////////////

export function loader(ctx) {
  console.log(ctx)
  if (ctx.params['*'] === 'exp') {
    return redirect('/expenses')
  }

  throw new Response('Not found', { status: 404 })
}
