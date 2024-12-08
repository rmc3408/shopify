import ExpenseListItem from './ExpenseListItem';

function ExpensesList({ expenses }) {

  return (
    <ol id="expenses-list">
      {expenses.map((expense, i) => (
        <li key={i}>
          <ExpenseListItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
          />
        </li>
      ))}
    </ol>
  );
}

export default ExpensesList;
