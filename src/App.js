
import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expense = [
    { title: 'It Starts with Us: A Novel', amount: '10.98$', img: 'https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL900_SR900,600_.jpg',img2:'https://m.media-amazon.com/images/I/81QpzHbJxQL.jpg', sold:'Stimatsky', description: 'It Starts With Us is told from the alternating perspectives of two main characters' },
    { title: 'It Ends with Us: A Novel  ', amount: '9.99$', img:'https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL900_SR900,600_.jpg',img2:'https://m.media-amazon.com/images/I/81cVyTFon4L.jpg', sold:'Zomet Sfarim', description:''},
    { title: 'Where the Crawdads Sing   ', amount: '9.98$', img:'https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL900_SR900,600_.jpg',img2:'https://ntvb.tmsimg.com/assets/p21630125_v_h10_ac.jpg?w=960&h=540', sold:'Stimatsky, amazon', description:'amazing book'},
    { title: 'Reminders of Him: A Novel', amount: '11.26$', img:'https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL900_SR900,600_.jpg',img2:'https://m.media-amazon.com/images/I/61WRbS1QHjL.jpg',sold:'Zomet Sfarim,ebay,amazon', description:'In this “brave and heartbreaking novel that digs its claws into you and doesn’t let go, long after you’ve finished it"' },
  ];
  return (
    <div>
      <h2> this is my books</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        img={expense[0].img}
        img2 = {expense[0].img2}
        sold={expense[0].sold}
        description = {expense[0].description} 
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        img={expense[1].img}
        img2 = {expense[1].img2}
        sold={expense[1].sold}
        description = {expense[1].description} 
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        img={expense[2].img}
        img2 = {expense[2].img2}
        sold={expense[2].sold}
        description = {expense[2].description} 
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        img={expense[3].img}
        img2 = {expense[3].img2}
        sold={expense[3].sold}
        description = {expense[3].description} 
      ></ExpenseItem>
    </div>
  );
}

export default App;
