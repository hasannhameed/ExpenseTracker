
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
  return (
    <Card className="expenses">
      <ExpenseFilter filterYear={filterYear} onfilterYearHandler={filterYearHandler} />
      {
        props.items.map(expenses=><ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
        
        />)
      }
    </Card>
  );
}

export default Expenses;
