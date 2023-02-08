import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card';

function ExpenseItem(props){

    const clickHandler = () => {
        console.log('clicked!!!');
    };
 
    return (
        <Card className='expense-item'>
          <ExpenseDate date = {props.date}/>
            <div className='expense-item_description'>
                <h2>{props.title}</h2>
                </div>
                <div className='expense-item_price'>${props.amount}</div>

                <button onClick={clickHandler}>Change Title</button>
        </Card>
    
    );
}

export default  ExpenseItem;