
import ExpenseImg from './ExpenseImg';
import "./ExpenseItem.css";

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <div>
                <div className="expense-item__description "> {props.title}</div>
                <div className="expense-item__price"> {props.amount}</div>
            </div>
            <ExpenseImg img={props.img} />
        </div>
    );
}

export default ExpenseItem;