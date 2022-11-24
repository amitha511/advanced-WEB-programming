
import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expense = [
    { title: 'It Starts with Us: A Novel', amount: '10.98$', img:'https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL900_SR900,600_.jpg' },
    { title: 'It Ends with Us: A Novel  ', amount: '9.99$', img:'https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL900_SR900,600_.jpg' },
    { title: 'Where the Crawdads Sing   ', amount: '9.98$', img:'https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL900_SR900,600_.jpg' },
    { title: 'Reminders of Him: A Novel', amount: '11.26$', img:'https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL900_SR900,600_.jpg' },
  ];
  return (
    <div>
      <h2> this is my books</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        img={expense[0].img}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        img={expense[1].img}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        img={expense[2].img}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        img={expense[3].img}
      ></ExpenseItem>
    </div>
  );
}

export default App;
