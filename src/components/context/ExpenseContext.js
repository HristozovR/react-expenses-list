import React, { useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 },
  ],
};

// Create context
export const ExpenseContext = React.createContext(initialState);

// Provider component
export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const аddTransaction = (transaction) => {
    dispatch({ type: 'ADD', payload: transaction });
  };

  const sortTransactions = (value) => {
    dispatch({ type: 'SORT', payload: value });
  };

  return (
    <ExpenseContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        sortTransactions,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

// 4x Sort
