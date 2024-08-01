import { Link, useNavigate } from '@remix-run/react'
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

