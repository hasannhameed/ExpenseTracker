
import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter.js'
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  const filterYearHandler = (year) =>{
    setFilterYear(year);
    console.log(year);
   
  }

  const filterExpense = props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filterYear});
  return (
    <Card className="expenses">
      <ExpenseFilter filterYear={filterYear} onfilterYearHandler={filterYearHandler} />
      { filterExpense.length > 0 ?(filterExpense.map(expenses=><ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
        
        />)):(
          <p>No Expense found for {filterYear} </p>
        )
      }
    </Card>
  );
}

export default Expenses;
