
import ExpenseImg from './ExpenseImg';
import "./ExpenseItem.css";
import "./ExpenseImg.css";
import ReactDOM from 'react-dom/client';
import App from '../App';

function ExpenseData(props) {
    const clickHendler = () => {
       console.log("hi");
        // const root = ReactDOM.createRoot(document.getElementById('root'));
        // root.render(<App />);

    }
    return (
        <div className='expense-item'>
            <div>
                <h1>Details:</h1>
                <div className="expense-item__description "><b>Sold in stores:</b> {props.sold} </div>
                <div className="expense-item__description "></div>
            </div>
            <ExpenseImg img={props.img}/>
            <button className='button-71' onClick={clickHendler}>back</button>
        </div>
    );
}

export default ExpenseData;