import { redirect } from '@remix-run/node'

export function loader(ctx) {
  console.log(ctx)
  if (ctx.params['*'] === 'exp') {
    return redirect('/expenses')
  }

  throw new Response('Not found', { status: 404 })
}
