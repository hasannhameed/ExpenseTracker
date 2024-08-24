import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  //const [amount,SetAmount] = useState(props.amount);
  const [title,setTitle] = useState(props.title);
  console.log('Expese Item exicated by React')

  const updateName = () =>{
    setTitle("title changed")
    console.log(title);
  }

  // const updateAmount = () =>{
  //   SetAmount(amount*0);
  // }

  return (
    <div>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={updateName}>Change Title </button>
       {/* { <button onClick={updateAmount}>Change Amount </button>} */}
      </div>
    </Card>
    </div>
  );
}

export default ExpenseItem;
