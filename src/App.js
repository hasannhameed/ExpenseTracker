import React,{useState} from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';

const DUMMY_EXPENSES = [

  { id: 'e1',title: 'Toilet Paper',amount: 94.12,date: new Date(2021, 7, 14) },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)  },
  { id: 'e3',title: 'Car Insurance',amount: 294.67,date: new Date(2019, 2, 28) },
  { id: 'e4',title: 'New Desk (Wooden)',amount: 450,date: new Date(2022, 5, 12) },
];

const App = () => {
  const [ expenses, setExpenses] = useState(DUMMY_EXPENSES)
 
  const saveExpensedata =(enteredExpenseData) =>{
    setExpenses((prevState)=>{
      return [ enteredExpenseData, ...prevState]
    })
    console.log(enteredExpenseData);
   
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpenses onSaveExpensedata={saveExpensedata}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
