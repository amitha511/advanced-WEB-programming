import React, { useEffect, useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) => {
    
    const [enterdTitle, setEnterdTitle] = useState("");
    const [enterdAmount, setEnterdAmount] = useState("");
    const [enterdImg, setEnterdImg] = useState("");
    const [enterdImg2, setEnterdImg2] = useState("");
    const [enterdSold, setEnterdSold] = useState("");
    const [enterdDescription, setEnterdDescription] = useState("");
    // const [line, setLine] = useState("");

    const submitHendler = (event) => {
        event.preventDefault();  //prevent from page reload
        setEnterdAmount(enterdAmount + '$');
        const expenseData = {
            name: enterdTitle,
            amount: enterdAmount,
            img: enterdImg,
            img2: enterdImg2,
            sold: enterdSold,
            description: enterdDescription
            
        }
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        // setLine(enterdTitle)
        setEnterdTitle("");
        setEnterdAmount("");
        setEnterdImg("");
        setEnterdImg2("");
        setEnterdSold("");
        setEnterdDescription("");

    }

    const titleChangeHendler = (event) => {
        console.log(event.target.value);
        setEnterdTitle(event.target.value);
    }

    const amountChangeHendler = (event) => {
        console.log(event.target.value);
        setEnterdAmount(event.target.value);
    }
    const imgChangeHendler = (event) => {
        console.log(event.target.value);
        setEnterdImg(event.target.value);
    }
    const img2ChangeHendler = (event) => {
        console.log(event.target.value);
        setEnterdImg2(event.target.value);
    }

    const soldChangeHendler = (event) => {
        console.log(event.target.value);
        setEnterdSold(event.target.value);
    }
    const descriptionChangeHendler = (event) => {
        console.log(event.target.value);
        setEnterdDescription(event.target.value);
    }
    
    return (
        <form onSubmit={submitHendler}>
            <div className='new-expense_controls'>
                <div className='new-expense_control'>
                    <label>name:</label>
                    <input type="text" value={enterdTitle} onChange={titleChangeHendler} />
                </div>

                <div className='new-expense_control'>
                    <label>Amount:</label>
                    <input type="number" value={enterdAmount} onChange={amountChangeHendler} min="0.01" step="0.01" />
                </div>
                <div className='new-expense_control'>
                    <label>img1 url:</label>
                    <input type="text" value={enterdImg} onChange={imgChangeHendler} />
                </div>
                <div className='new-expense_control'>
                    <label>img2 url:</label>
                    <input type="text" value={enterdImg2} onChange={img2ChangeHendler} />
                </div>

                <div className='new-expense_control'>
                    <label>sold:</label>
                    <input type="text" value={enterdSold} onChange={soldChangeHendler} />
                </div>
                <div className='new-expense_control'>
                    <label>description:</label>
                    <input type="text" value={enterdDescription} onChange={descriptionChangeHendler} />
                </div>
            </div>
            <button type="submit">add expense</button>
        </form>
    );
}

export default ExpenseForm;