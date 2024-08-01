import { Link } from '@remix-run/react'
import ExpenseForm from '~/components/expenses/ExpenseForm'
import Modal from '../../../components/util/Modal'

export default function ExpenseAdd() {
  return <Modal><ExpenseForm /></Modal>
}
