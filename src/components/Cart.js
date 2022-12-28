
import "./ExpenseItem.css";
import React, { useState, useEffect } from 'react';
import CartItems from './CartItems'
import NewExpense from "./NewExpense/NewExpense";

function Cart(props) {
    const [userName, setEnterdUserNam] = useState("");
    const [email, setEnterdEmail] = useState("");

    const addExpenseHendler = (data) => {
        setEnterdUserNam(data.userName);
        setEnterdEmail(data.email);
    };
    
    const [form, setEnterdForm] = useState(<NewExpense onAddData={addExpenseHendler}></NewExpense>);

    const [content, setContent] = useState(<div>{props.items.map(expense => <CartItems key={expense.id} name={expense.name} amount={expense.amount} img={expense.img}
         />)}</div>);

    const removeAllCart = (event) => {
        event.preventDefault();
        props.items.map(async expense1 => {
            const expenseData = {
                userName: userName,
                email: email,
                amount: 12,
                name: expense1.name,
            }
            props.onSaveExpenseData(expenseData)
            setEnterdForm(<p>"done"</p>)
            setContent(<p>"Thank you for buying!"</p>)
        });
    }
    

    useEffect(() => {
        setContent(<div>{props.items.map(expense => <CartItems key={expense.id} name={expense.name} amount={expense.amount} img={expense.img}
        button={"Remove"} />)}</div>);
    },[props.items]);

    return (
        <div>
            <div className='expense-item1' >
                <div className="expenses1">
                    <h1>Total :{props.bill}</h1>
                    <section>{form}</section>
                    <section>{content} </section>
                    <button className="button-24" onClick={removeAllCart} >Buy!</button>
                </div>
            </div>
        </div>
    );
}


export default Cart;