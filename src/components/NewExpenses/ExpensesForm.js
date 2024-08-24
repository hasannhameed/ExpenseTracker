import React, { useState } from 'react';
import './ExpenseForm.css'



const ExpenseForm = () => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');


    const titleChangeHandler = (event) => {

       console.log(event.target.value);

    }
    return (
        <form >

            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                     <input value={title}  type="text" placeholder='Title' onChange={titleChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                    <label htmlFor=""> Amount:</label>
                    <input value={amount} type="number" placeholder='Amount' onChange={(event) => { setAmount(event.target.value) }} />
                    </div>
                    <div className='new-expense__control'>
                    <label htmlFor=""> Date :</label>
                    <input value={date} type="date" placeholder='Date' onChange={((event) => { setDate(event.target.value) })} />
                    </div>
                    <div className="new-Expense__action">
                    <button type='submit'>Add Expenses</button>
                    </div>
            </div>
        </form>
    )

}
export default ExpenseForm;