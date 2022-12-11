
import NewExpense from "./components/NewExpense/NewExpense"
import Expenses from "./components/Expenses"
import React, { useState, useEffect, useCallback } from 'react';

const DUMMY_EXPENSE = [
    // { id:'e1', title: 'It Starts with Us: A Novel', amount: '10.98$', img: 'https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL900_SR900,600_.jpg',img2:'https://m.media-amazon.com/images/I/81QpzHbJxQL.jpg', sold:'Stimatsky', description: 'It Starts With Us is told from the alternating perspectives of two main characters' },
    // { id:'e2', title: 'It Ends with Us: A Novel', amount: '9.99$', img:'https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL900_SR900,600_.jpg',img2:'https://m.media-amazon.com/images/I/81cVyTFon4L.jpg', sold:'Zomet Sfarim', description:''},
    // { id:'e3', title: 'Where the Crawdads Sing', amount: '9.98$', img:'https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL900_SR900,600_.jpg',img2:'https://ntvb.tmsimg.com/assets/p21630125_v_h10_ac.jpg?w=960&h=540', sold:'Stimatsky, amazon', description:'amazing book'},
    // { id:'e4',title: 'Reminders of Him: A Novel', amount: '11.26$', img:'https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL900_SR900,600_.jpg',img2:'https://m.media-amazon.com/images/I/61WRbS1QHjL.jpg',sold:'Zomet Sfarim,ebay,amazon', description:'In this “brave and heartbreaking novel that digs its claws into you and doesn’t let go, long after you’ve finished it"' },
];
   // console.log("im in app.js");
    // console.log(expense);
    // setExpense((prevExpense) => {
    //   return [expense, ...prevExpense]
    // });
  // };

const App = () => {

  const [expense, setExpense] = useState(DUMMY_EXPENSE);
  const [cartIsShown, setCartIsShown] = useState(false);

  async function addExpenseHendler(newbook) {
    
    console.log(newbook);

    const response = await fetch('http://localhost:5000/addProduct', {
      method: 'POST',
      body: JSON.stringify(newbook),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response;
    console.log(data);
            
  }
 

  const fetchBooksHendler = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:5000');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      
      console.log(response);
      const data = await response.json();
      console.log(data);
      const transformedBooks = data.products.map((booksData) => {
        return {
          name: booksData.name,
          amount: booksData.amount,
          img: booksData.img,
          img2: booksData.img2,
          sold: booksData.sold,
          description: booksData.description
        };
      });
      setExpense(transformedBooks);
    } catch (error) { console.log(error.message); }
  
  });

  // useEffect(() => {
  //   fetchBooksHendler();
  // }, [fetchBooksHendler]);

  let content = <p>Found no movies</p>

  if (Expenses.length > 0) {
    content = <Expenses item={expense} />;
  }
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <React.Fragment>
      <div>
        <h2> this is my books</h2>

        {/* <button onClick={<Cart item={expense}/>}>Cart</button> */}

        <NewExpense onAddExpense={addExpenseHendler}></NewExpense>

        <button onClick={fetchBooksHendler}>Fetch books</button>
        <section>{content}</section>

      </div>
    </React.Fragment>
  );
  
}

export default App;
