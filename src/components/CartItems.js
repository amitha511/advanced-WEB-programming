import ExpenseImg from './ExpenseImg';
import "./ExpenseItem.css";
import Card from './UI/Card';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


function CartItems(props) {

    const [name,setTitle] = useState(props.name); //"titel"
    const [amount, setamount] = useState(props.amount);
    const [img, setImg] = useState(props.img);
    
    const clickHendler = () => {
        console.log(props);
        props.onSaveExpenseData(props);

    }


    return (
        <div className='expense-item'>
            <div>
                <div className="expense-item__description "> {name}</div>
                <div className="expense-item__price"> {amount}</div>
                <button onClick={clickHendler}>remove</button>

            </div>
            <ExpenseImg img={img} />
        </div>
    );
}

export default CartItems;