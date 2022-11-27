
import ExpenseImg from './ExpenseImg';
import "./ExpenseItem.css";
import ReactDOM from 'react-dom/client';
import App from '../App';



function ExpenseData(props) {
    const clickHendler = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);

    }
    return (
        <div className='expense-item'>
            <div>
                <div className="expense-item__description "> Sold in stores   :{props.sold} </div>
                <div className="expense-item__description "> img:     <ExpenseImg img={props.img}/> </div>
                <div className="expense-item__description "> Description:   {props.description} </div>
            </div>
            <button onClick={clickHendler}>back</button>
        </div>
    );
}

export default ExpenseData;