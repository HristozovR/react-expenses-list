import React, { useContext } from 'react';
import { ExpenseContext } from './context/ExpenseContext';

export const IncomeExpenses = () => {
  const { transactions } = useContext(ExpenseContext);

  const expenses = transactions.map((transaction) => transaction.amount);

  const positiveExpense =
    expenses.filter((amount) => amount > 0).length === 0
      ? 0
      : expenses
          .filter((amount) => amount > 0)
          .reduce((prev, curr) => prev + curr)
          .toFixed(2);

  const negativeExpense =
    expenses.filter((amount) => amount < 0).length === 0
      ? 0
      : expenses
          .filter((amount) => amount < 0)
          .reduce((prev, curr) => prev + curr)
          .toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>{positiveExpense}$</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>{negativeExpense}$</p>
      </div>
    </div>
  );
};
