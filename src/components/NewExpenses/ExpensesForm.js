import React, { useState } from 'react';
import './ExpenseForm.css'



const ExpenseForm = () => {

    const [userInput, setUserInput] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    });


    const inputHandler=(event)=>{
        const {name, value} = event.target;
        setUserInput((prevState)=>{
            return{
                ...prevState,
                [name] : value
            }
        })
    }

    const handleForm = (event)=>{
        event.preventDefault();
        console.log(userInput);
    }
    console.log(userInput);
   
    
   
    return (
        <form  onSubmit={handleForm}>

            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                     <input name='enteredTitle' value={ userInput.enteredTitle}  type="text" placeholder='Title' onChange={inputHandler} />
                    </div>
                    <div className='new-expense__control'>
                    <label  htmlFor=""> Amount:</label>
                    <input  name='enteredAmount' value={ userInput.enteredAmount} type="number" placeholder='Amount'  onChange={inputHandler} />
                    </div>
                    <div className='new-expense__control'>
                    <label htmlFor=""> Date :</label>
                    <input  name='enteredDate' value={ userInput.enteredDate} type="date"  placeholder='Date'  onChange={inputHandler} />
                    </div>
                    <div className="new-Expense__action">
                    <button type='submit'>Add Expenses</button>
                    </div>
            </div>
        </form>
    )

}
export default ExpenseForm;