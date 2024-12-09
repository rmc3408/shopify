import { redirect } from '@remix-run/node'
import { useNavigate } from '@remix-run/react'
import { updateExpense } from 'mongo/expense.server'
import ExpenseForm from '~/components/expenses/ExpenseForm'
import Modal from '~/components/util/Modal'
import { validateExpenseInput } from '~/components/util/validation.server'

export default function ExpenseId() {
  const navigate = useNavigate()
  
  const closingModal = () => {
    navigate("..")
  }
  return (
    <Modal onClose={closingModal}>
      <ExpenseForm />
    </Modal>
  )
}

// Alternative: Get data from route/_expenses from loading all data via useMatches
// export async function loader(ctx) {
//   const id = ctx.params.id
//   return getOneExpense(id)
// }

export async function action(ctx) {
  const formData = await ctx.request.formData()
  const expenseId = ctx.params.id
  const data = Object.fromEntries(formData)
  const newExpense = { title: data.title, amount: data.amount, date: data.date }

  try {
    validateExpenseInput(newExpense)
  } catch (error) {
    console.log(error)
    return error
  }

  await updateExpense(expenseId, newExpense)

  return redirect('/expenses')
}