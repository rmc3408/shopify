import { Link, useLoaderData, useRouteError } from '@remix-run/react'
import { getExpense } from 'mongo/expense.server'
import Chart from '~/components/expenses/Chart'
import ExpenseStatistics from '~/components/expenses/ExpenseStatistics'


export default function ExpenseAnalysis() {
  const expenses = useLoaderData()

  return (
    <main>
      <Chart expenses={expenses} />
      <ExpenseStatistics expenses={expenses} />
    </main>
  )
}

export async function loader() {
  const expenses = await getExpense()

  if (!expenses || expenses.length === 0) {
    throw json(
      { message: 'Could not load expenses for the requested analysis.' },
      {
        status: 404,
        statusText: 'Expenses not found',
      }
    )
  }

  return expenses;
}


export function CatchBoundary() {
  const caughtResponse = useRouteError()

  return (
    <main>
      <Error title={caughtResponse.statusText}>
        <p>{caughtResponse.data?.message || 'Something went wrong - could not load expenses.'}</p>
      </Error>
    </main>
  )
}
