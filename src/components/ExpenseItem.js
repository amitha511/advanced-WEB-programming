
import ExpenseImg from './ExpenseImg';
import "./ExpenseItem.css";
import ExpenseData from './ExpenseData'
import ReactDOM from 'react-dom/client';


function ExpenseItem(props) {

    const clickHendler = () =>{
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ExpenseData sold={props.sold} img={props.img2} description={props.description} />);
    }

    return (
        <div className='expense-item' onClick={clickHendler}>
            <div>
                <div className="expense-item__description "> {props.title}</div>
                <div className="expense-item__price"> {props.amount}</div>
            </div>
            <ExpenseImg img={props.img} />
        </div>
    );
}

export default ExpenseItem;