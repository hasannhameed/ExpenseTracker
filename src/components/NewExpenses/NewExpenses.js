import React from 'react';
import ExpenseForm from './ExpensesForm';
import './NewExpenses.css'

const NewExpenses = (props) =>{
    return (
       <div className='new-expense'> 
        <ExpenseForm onSaveExpensedata={props.onSaveExpensedata}/>
       </div>
    )
}

export default NewExpenses;