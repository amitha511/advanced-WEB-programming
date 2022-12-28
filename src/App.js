
import NewExpense from "./components/NewExpense/NewExpense"
import Expenses from "./components/Expenses"
import React, { useState, useEffect, useCallback } from 'react';
import Cart from "./components/Cart";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/UI/Menu";

import MessageBox from "./MessageBox";

const DUMMY_EXPENSE = [];


const App = () => {

  const [expense, setExpense] = useState(DUMMY_EXPENSE);

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

  async function shopHendler(newbook) {
  

    console.log(newbook);

    const response = await fetch('http://localhost:5000/addShopping', {
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
          amount: booksData.amount + '$',
          img: booksData.img,

        };
      });
      setExpense(transformedBooks);
    } catch (error) { console.log(error.message); }
  
  });
  

  useEffect(() => {
    fetchBooksHendler();
  }, [fetchBooksHendler]);

  let content = <p>Found no movies</p>

  if (Expenses.length > 0) {
    content = <Expenses onAddExpense={shopHendler} item={expense} />;
  }
  

  return (
    <React.Fragment>
      <div>
        <Menu content = {content}></Menu>
        <section>{content}</section>

      </div>
    </React.Fragment>
  );
  
}

export default App;
