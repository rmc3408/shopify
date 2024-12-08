import { Link, useFetcher } from '@remix-run/react'

function ExpenseListItem({ title, amount, id }) {
  const fet = useFetcher()

  function deleteExpenseItemHandler() {
    const formData = new FormData()
    formData.append('id', id)
    fet.submit(formData, { method: 'delete' })
  }

  if (fet.state !== 'idle') {
    return <article className="expense-item locked">
        <h2 className="expense-title">Deleting...</h2>
      </article>
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <button onClick={deleteExpenseItemHandler}>Delete</button>
        <Link to={`../../${id}`}>Edit</Link>
      </menu>
    </article>
  )
}

export default ExpenseListItem;
