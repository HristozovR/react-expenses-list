import React, { useContext } from 'react';
import { ExpenseContext } from './context/ExpenseContext';

export const TransactionItem = ({ name, amount, id }) => {
  const { deleteTransaction } = useContext(ExpenseContext);
  const sign = amount < 0 ? '-' : '+';

  return (
    <li className={sign === '-' ? 'minus' : 'plus'}>
      {name}
      <span>{amount.toFixed(2)}$</span>
      <button onClick={() => deleteTransaction(id)} className='delete-btn'>
        x
      </button>
    </li>
  );
};
