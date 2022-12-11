import Card from "./UI/Card";
import Cart from './Cart'
import ExpenseItem from "./ExpenseItem";
import React, { useState ,useEffect} from "react";


function Expenses(props) {

    const DUMMY_ITEM = []; 

    const [cartItems, setEnterdItems] = useState(DUMMY_ITEM);
    const [bill, setEnterdBill] = useState(0);
    
    const saveExpenseDataHandler = (expenseCart) => {
    const curr = bill;
    setEnterdBill(curr + parseInt(expenseCart.amount))
    setEnterdItems((prevExpense) => {
      return prevExpense.concat(expenseCart)
    });
        console.log(bill);
        console.log(cartItems);
    }

    let content = <p>The cart is empty</p>

  if (cartItems.length > 0) {
    content = <Cart items={cartItems} bill={bill}/>;
    }    
    
    return (
        <div>
            <Card  className="expenses">  
                {props.item.map(expense => <ExpenseItem onSaveExpenseData={saveExpenseDataHandler} key={expense.id} name={expense.name} amount={expense.amount} img={expense.img}
                    img2={expense.img2} sold={expense.sold} description={expense.description} button={"add"} />)}
            </Card>
            <section>{content}</section>
               
        </div>

    );
}

export default Expenses;