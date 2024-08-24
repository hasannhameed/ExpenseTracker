import React, { useState } from 'react';
import './ExpenseForm.css'



const ExpenseForm = () => {

    const [userInput, setUserUnput] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    });
   


    const titleChangeHandler = (event) => {
        setUserUnput((preveState)=>{
            return{
                ...preveState,
                enteredTitle:event.target.value
            }

        })
    }
    const amountChangeHandler = (event) => {
        setUserUnput((preveState)=>{
            return{
                ...preveState,
                enteredAmount:event.target.value
            }

        })
    }
    const dateChangeHandler = (event) => {
        setUserUnput((preveState)=>{
            return{
                ...preveState,
                enteredDate:event.target.value
            }

        })
    }
   
    
   
    return (
        <form >

            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                     <input value={ userInput.enteredTitle}  type="text" placeholder='Title' onChange={titleChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                    <label htmlFor=""> Amount:</label>
                    <input value={ userInput.enteredAmount} type="number" placeholder='Amount' onChange={amountChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                    <label htmlFor=""> Date :</label>
                    <input value={ userInput.enteredAmount} type="date" placeholder='Date' onChange={dateChangeHandler} />
                    </div>
                    <div className="new-Expense__action">
                    <button type='submit'>Add Expenses</button>
                    </div>
            </div>
        </form>
    )

}
export default ExpenseForm;