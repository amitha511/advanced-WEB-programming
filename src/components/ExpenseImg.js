
import './ExpenseImg.css'

function ExpenseImg(props) {
      return( <div className="expense-img">
        <img src={props.img} alt='img'/> 
    </div>
      )
};


export default ExpenseImg;