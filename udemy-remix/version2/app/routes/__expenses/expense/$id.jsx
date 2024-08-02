import { redirect } from '@remix-run/node'
import { useNavigate } from '@remix-run/react'
import { updateExpense } from 'mongo/expense.server'
import { validateExpenseInput } from 'mongo/validation.server'
//import { getOneExpense } from 'mongo/expense.server'
import ExpenseForm from '~/components/expenses/ExpenseForm'
import Modal from '~/components/util/Modal'

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

// Parent Expense.jsx is already loading all data, USEMATCHES
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

  return redirect('/expense')
}