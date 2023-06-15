import React, {useState} from 'react';
import ExpenseData from "./Data/ExpenseData";
import Expense from './components/Expense/Expense';
import AddExpense from './components/AddExpense/AddExpense';

function App() {
const [newExpense, setNewExpense] = useState(ExpenseData);
  const getFormDataByLiftUp = (data) => {
setNewExpense((expensedata)=> {
return [data, ...expensedata];
});
  }
  
  return (
    <div>
     <AddExpense liftUpData={getFormDataByLiftUp} />
      <Expense items={newExpense} />
    </div>
  );
}

export default App;