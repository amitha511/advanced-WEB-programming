
import ExpenseImg from './ExpenseImg';
import "./ExpenseItem.css";
import Card from './UI/Card';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


function ExpenseItem(props) {

    const [name,setTitle] = useState(props.name); //"titel"
    const [desc, setdesc] = useState(props.description);
    const [amount, setamount] = useState(props.amount);
    const [img, setImg] = useState(props.img);
    
    const clickHendler = () => {
        console.log(props);
        props.onSaveExpenseData(props);
        // setTitle("Sold in stores: " + props.sold);
        // setdesc("Description: " + props.description)
        // setImg(props.img2)
        // setamount("") 
    }


    return (
        <div className='expense-item' >
            <div>
                <div className="expense-item__description "> {name}</div>
                {/* //<div className="expense-item__description "> {desc}</div>*/}
                <div className="expense-item__price"> {amount}</div>
                <button onClick={clickHendler}>{ props.button}</button>

            </div>
            <ExpenseImg img={img} />
        </div>
    );
}

export default ExpenseItem;