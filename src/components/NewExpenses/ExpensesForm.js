import React, { useState } from 'react';
import './ExpenseForm.css'



const ExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler= (event) =>{
        setTitle(event.target.value);
    }
    const amountChangeHandler=(event)=>{
        setAmount(event.target.value);
    }

    const dateChangeHandler=(event)=>{
        setDate(event.target.value);
    }


    const handleForm = (event)=>{
        event.preventDefault();
        const userInput={
            title,
            amount,
            date:new Date(),
            id:Math.random().toString(),
        }    
        setTitle('');
        setAmount('');
        setDate('');
        props.saveExpensedata(userInput);
    }
   
   
    
   
    return (
        <form  onSubmit={handleForm}>

            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                     <input name='enteredTitle' value={title}  type="text" placeholder='Title' onChange={titleChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                    <label  htmlFor=""> Amount:</label>
                    <input  name='enteredAmount' value={ amount} type="number" placeholder='Amount'  onChange={amountChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                    <label htmlFor=""> Date :</label>
                    <input  name='enteredDate' value={date} type="date"  placeholder='Date'  onChange={dateChangeHandler} />
                    </div>
                    <div className="new-Expense__action">
                    <button type='submit'>Add Expenses</button>
                    </div>
            </div>
        </form>
    )

}
export default ExpenseForm;