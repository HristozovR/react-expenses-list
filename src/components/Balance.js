import React, { useContext } from 'react';
import { ExpenseContext } from './context/ExpenseContext';

const Balance = () => {
  const { transactions } = useContext(ExpenseContext);

  const balance = transactions
    .map((transaction) => transaction.amount)
    .reduce((prev, curr) => (prev += curr), 0)
    .toFixed(2);

  return (
    <div className='container'>
      <h4>Your Balance</h4>
      <h1>{balance}$</h1>
    </div>
  );
};

export default Balance;
