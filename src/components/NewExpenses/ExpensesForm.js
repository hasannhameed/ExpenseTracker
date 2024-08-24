import React from 'react';
import './ExpenseForm.css'



const ExpenseForm = () => {

   

    const handleForm = (event)=>{
        event.preventDefault();
       
        const formData= new FormData(event.target);
        const obj = Object.fromEntries(formData.entries()) 
        //The entries() method is used in JavaScript to return an iterator object that contains the key/value pairs of a given array.
        console.log(obj)
    }
   
   
    
   
    return (
        <form  onSubmit={handleForm}>

            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                     <input name='enteredTitle'  type="text" placeholder='Title' />
                    </div>
                    <div className='new-expense__control'>
                    <label  htmlFor=""> Amount:</label>
                    <input  name='enteredAmount'  type="number" placeholder='Amount'  />
                    </div>
                    <div className='new-expense__control'>
                    <label htmlFor=""> Date :</label>
                    <input  name='enteredDate' type="date"  placeholder='Date' />
                    </div>
                    <div className="new-Expense__action">
                    <button type='submit'>Add Expenses</button>
                    </div>
            </div>
        </form>
    )

}
export default ExpenseForm;