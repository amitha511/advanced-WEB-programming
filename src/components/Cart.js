
import ExpenseImg from './ExpenseImg';
import "./ExpenseItem.css";
import Card from './UI/Card';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import ExpenseItem from './ExpenseItem';
import CartItems from './CartItems'

function Cart(props) {


    const saveExpenseDataHandler = (items) => {
    }

    console.log(props.items[0])

    return (
        <div>
            <label>Cart:</label>
            <label>Total :{props.bill}</label>
            <div className='expense-item' >
            
                <Card className="expenses">
                    {props.items.map(expense => <CartItems onSaveExpenseData={saveExpenseDataHandler} key={expense.id} name={expense.name} amount={expense.amount} img={expense.img}
                        img2={expense.img2} sold={expense.sold} description={expense.description} />)}
                </Card>
            </div>
        </div>
    );
}

export default Cart;