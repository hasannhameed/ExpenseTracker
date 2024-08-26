
import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter.js'
import ExpenseList from './ExpenseList.js';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  const filterYearHandler = (year) =>{
    setFilterYear(year);
    console.log(year);
   
  }

  const filterExpense = props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filterYear
  });

  return (
    <Card className="expenses">
      <ExpenseFilter filterYear={filterYear} onfilterYearHandler={filterYearHandler} />
      <ExpenseList filterExpense={filterExpense}/>
    </Card>
  );
}

export default Expenses;
