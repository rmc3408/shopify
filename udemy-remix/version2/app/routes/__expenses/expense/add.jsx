import ExpenseForm from '~/components/expenses/ExpenseForm'
import Modal from '~/components/util/Modal'
import { addExpense } from '../../../../mongo/expense.server'

export default function ExpenseAdd() {
  return <Modal><ExpenseForm /></Modal>
}

export async function action(ctx) {
  const formData = await ctx.request.formData()
  const data = Object.fromEntries(formData)
  const newExpense = { title: data.title, amount: data.amount, date: data.date }
  const sucessfulData = await addExpense(newExpense)
  return sucessfulData
}