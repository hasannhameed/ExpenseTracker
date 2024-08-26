import React from 'react';
import Chart from '../Chart/Chart';

const ExpenseChart  = (props) =>{   
    return (
        <Chart  chartExpense={props.filterExpense}/>
    )
}
export default ExpenseChart;