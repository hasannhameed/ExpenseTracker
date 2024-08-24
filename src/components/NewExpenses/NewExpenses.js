import React from 'react';
import ExpenseForm from './ExpensesForm';
import './NewExpenses.css'

const NewExpenses = () =>{
    return (
       <div className='new-expense'> 
        <ExpenseForm />
       </div>
    )
}

export default NewExpenses;