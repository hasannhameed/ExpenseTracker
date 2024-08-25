import React from 'react';
import ExpenseForm from './ExpensesForm';
import './NewExpenses.css'

const NewExpenses = (props) =>{

    const saveExpensedata=(enteredExpenseDate)=>{
        const expenseData={
            ...enteredExpenseDate
        }
        props.saveExpensedata(expenseData)
    }
   
    return (
       <div className='new-expense'> 
        <ExpenseForm saveExpensedata={saveExpensedata}/>
       </div>
    )
}

export default NewExpenses;