import { getExpense } from 'mongo/expense.server'

export function loader() {
  return getExpense()
}
