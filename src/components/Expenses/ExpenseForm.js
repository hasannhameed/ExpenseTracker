import  { useState } from 'react';

const ExpenseForm = () => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');


    const HandleForm = (event) => {

        event.preventDefault();
       console.log({title, amount, date});

    }
return (
    <form onSubmit={HandleForm}>
        Title: <input value={title} type="text" placeholder='Title' onChange={(event)=>{setTitle(event.target.value)}} />
        Amount: <input value={amount} type="number" placeholder='Amount' onChange={(event)=>{setAmount(event.target.value)}} />
        Date : <input value={date} type="date" placeholder='Date'  onChange={((event)=>{setDate(event.target.value)})}/>
        <button type='submit'>Add</button>
    </form>
)

}
export default ExpenseForm;