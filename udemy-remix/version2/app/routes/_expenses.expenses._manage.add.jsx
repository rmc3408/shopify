import { redirect } from '@remix-run/node'
import { addExpense } from 'mongo/expense.server'
import ExpenseForm from '~/components/expenses/ExpenseForm'
import Modal from '~/components/util/Modal'
import { validateExpenseInput } from '~/components/util/validation.server'

export default function ExpenseAdd() {
  return (
    <Modal>
      <ExpenseForm />
    </Modal>
  )
}

export async function action(ctx) {
  const formData = await ctx.request.formData()
  const data = Object.fromEntries(formData)
  const newExpense = { title: data.title, amount: data.amount, date: data.date }

  try {
    validateExpenseInput(newExpense)
  } catch (error) {
    return error
  }

  await addExpense(newExpense)
  return redirect('/expenses')
}
