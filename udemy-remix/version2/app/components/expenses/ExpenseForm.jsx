import { Form, Link, useActionData, useParams, useMatches, useNavigation } from '@remix-run/react'

function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
  const postData = useActionData()
  const nav = useNavigation()
  
  const matches = useMatches()

  const selectedId = useParams().id
  const expensesMatched = matches.find((exp) => exp.id === 'routes/_expenses')
  const expenseFound = expensesMatched.data?.find((exp) => exp.id === selectedId)

  const isSubmitting = nav.state !== 'idle'
  const values = expenseFound
    ? {
        title: expenseFound.title,
        amount: expenseFound.amount,
        date: expenseFound.date.slice(0, 10),
      }
    : {
        title: '',
        amount: 0,
        date: null,
      }

  return (
    <Form method="post" className="form" id="expense-form">
      <p>
        <label htmlFor="title">Expense Title</label>
        <input type="text" id="title" name="title" required defaultValue={values.title} />
      </p>

      <div className="form-row">
        <p>
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" name="amount" step="0.01" required defaultValue={values.amount} />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" max={today} required defaultValue={values.date} />
        </p>
      </div>
      {postData && (
        <ul>
          {Object.values(postData).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <div className="form-actions">
        <button disabled={isSubmitting}>{isSubmitting ? 'Saving...' : 'Save Expense'}</button>
        <Link to="..">Cancel</Link>
      </div>
    </Form>
  )
}

export default ExpenseForm;
