import React from 'react';
import './Chart.css'
import ChartBar from './ChartBar';


const Chart = (props) =>{

    const ExpensesArray = props.chartExpense.map(MonthExpenseData=>{
        return MonthExpenseData.amount;
    })

    const maxValue = Math.max(...ExpensesArray);



    const chartData = [
        {expenseMonth: "Jan", expenseValue: 0},
        {expenseMonth: "Feb", expenseValue: 0},
        {expenseMonth: "Mar", expenseValue: 0},
        {expenseMonth: "Apr", expenseValue: 0},
        {expenseMonth: "May", expenseValue: 0},
        {expenseMonth: "Jun", expenseValue: 0},
        {expenseMonth: "Jul", expenseValue: 0},
        {expenseMonth: "Aug", expenseValue: 0},
        {expenseMonth: "Sep", expenseValue: 0},
        {expenseMonth: "Oct", expenseValue: 0},
        {expenseMonth: "Nov", expenseValue: 0},
        {expenseMonth: "Dec", expenseValue: 0},
    ]

    for(let expense of props.chartExpense){
        chartData[expense.date.getMonth()].expenseValue+=expense.amount;
    }
    console.log(chartData);
        
    return (
        <div className='chart'> 
       { chartData.map((dataMonth)=>{
          return( <ChartBar 
               key = {dataMonth.expenseMonth}
               label = {dataMonth.expenseMonth}
               value = {dataMonth.expenseValue}
               maxValue = {maxValue}
          />)
       })
      }
        </div>
    )
}

export default Chart;

