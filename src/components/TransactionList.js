import React, { useContext } from 'react';
import { ExpenseContext } from './context/ExpenseContext';
import { TransactionItem } from './TransactionItem';

export const TransactionList = () => {
  const { transactions, sortTransactions } = useContext(ExpenseContext);

  return (
    <>
      <div className='history'>
        <h3>History</h3>
        <select
          onChange={(e) => sortTransactions(e.target.value)}
          id='sort'
          name='sort'
        >
          <option value='none'>-</option>
          <option value='ascprice'>Ascending by price</option>
          <option value='descprice'>Descending by price</option>
          <option value='ascname'>Ascending by name</option>
          <option value='descname'>Descending by name</option>
        </select>
      </div>
      <ul className='list'>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            name={transaction.text}
            amount={transaction.amount}
            id={transaction.id}
          />
        ))}
      </ul>
    </>
  );
};
