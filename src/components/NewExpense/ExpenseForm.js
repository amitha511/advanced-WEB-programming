import React, { useEffect, useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) => {
    
    const [userName, setEnterduserName] = useState("");
    const [email, setEnterdEmail] = useState("");

    const submitHendler = (event) => {
        const expenseData = {
            userName: userName,
            email:email
        }
        event.preventDefault();  //prevent from page reload
        props.onSaveExpenseData(expenseData);
        setEnterduserName("");
        setEnterdEmail("");
    }

    const userNameChangeHendler = (event) => {
        console.log(event.target.value);
        setEnterduserName(event.target.value);
    }

    const emailChangeHendler = (event) => {
        console.log(event.target.value);
        setEnterdEmail(event.target.value);
    }


    
    return (
        <div><p>for update the cart - click on button cart</p>
        
        <form onSubmit={submitHendler}>
            <div className='new-expense_controls'>
                <div className='new-expense_control'>
                    <label>Full name:</label>
                    <input type="text" value={userName} onChange={userNameChangeHendler} />
                </div>

                <div className='new-expense_control'>
                    <label>email:</label>
                    <input type="text" value={email} onChange={emailChangeHendler} />
                </div>

            </div>
            <button className="button-24" type="submit">send</button>
            </form>
            </div>
    );
}

export default ExpenseForm;