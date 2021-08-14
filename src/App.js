import { Header } from './components/Header';

import './App.css';
import Balance from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { ExpenseProvider } from './components/context/ExpenseContext';

function App() {
  return (
    <>
      <Header />
      <ExpenseProvider>
        <IncomeExpenses />
        <Balance />
        <TransactionList />
        <AddTransaction />
      </ExpenseProvider>
    </>
  );
}

export default App;
