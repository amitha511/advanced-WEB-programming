import Card from "./UI/Card";
import Cart from './Cart'
import ExpenseItem from "./ExpenseItem";
import React, { useState ,useEffect} from "react";
import MessageBox from "../MessageBox";
const DUMMY_ITEM = []; 

function Expenses(props) {

    const [result, setResult] = useState(null); // messageBox

    const [cartItems, setEnterdItems] = useState(DUMMY_ITEM); //list of add items to cart 
    const [bill, setEnterdBill] = useState(0);  //total
    
    const saveExpenseDataHandler = (expenseCart) => {
        const curr = bill;
        setEnterdBill(curr + parseFloat(expenseCart.amount))
        setEnterdItems((prevExpense) => {
            return prevExpense.concat(expenseCart)
        });
        console.log(bill);
        console.log(cartItems);
    }

    const pip = (ExpenseData) => {
        props.onAddExpense(ExpenseData);
    };

    const handleButton = async () => {
        const result = await MessageBox.open({
            title: "Cart",
            content: <Cart onSaveExpenseData={pip} items={cartItems} bill={bill} />,
            buttons: [
                { name: "Close", handler: () => "yes" },
            ]
        });
        setResult(result);
    };
    
    return (
        <div>
            <div className="pt-5">
                <button className="button-24" onClick={handleButton}>Cart</button>
            </div>
            <div id="app-message-box" />

            <Card className="expenses">
                {props.item.map(expense => <ExpenseItem onSaveExpenseData={saveExpenseDataHandler} key={expense.id} name={expense.name} amount={expense.amount} img={expense.img}
                    button={"add"} />)}
            </Card>


               
        </div>

    );
}

export default Expenses;