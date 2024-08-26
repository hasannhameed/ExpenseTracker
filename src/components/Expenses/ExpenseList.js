import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {

    if (props.filterExpense.length === 0) {
        return <p>No Expense found... </p>
    }

    return (
        <ul className='expenselist-class'>

          {  props.filterExpense.map(expenses=>
            <ExpenseItem
                key={expenses.id}
                title={expenses.title}
                amount={expenses.amount}
                date={expenses.date}
            />)}

        </ul>
    )
}

export default ExpenseList;