import React from "react";
import ReactDom from 'react-dom/client';
import "./index.css";


const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Onion Pizza",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Tomato Pizza",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Mozarella",
      ingredients: "Tomato, mozarella, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  
//////////////////////////////////////////////////////////////////////////////////////////////////////

// creating app component it start with capital letter
// each funcrtion can return only one coomponent
function App() {
    return <div className="container">
        < Header />
        < Menu />
        < Footer />
    </div>;
};
//

const Header = () => {
  const style = {}
  
  return <header className="header">
    <h1 style={style}>Fast React Pizza co.</h1>
  </header>
};

const Menu = () => {
    return <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length > 0 ? (
        <> {/*this is React fragement it uses make a single parent element which is inside this fragement We can also write as <React.Fragements> </react.Fragements> */ }
        <p>
          Authentic Italian Pizzas and other Creative Dishes to Chooose from . All from our Store Oven  All Organic All delicious
        </p>
        <ul className="pizzas">
        {pizzaData.map(el => <Pizza name={el.name} ingredients={el.ingredients} photoName={el.photoName} price={el.price} key={ el.name} soldOut={el.soldOut} />)}
        </ul>
        </>   
      ): <p>We are Currently Working On Our today's Menu . Please Visit us After some Time </p>}
    </main>
};

function Pizza(props) {
  // if (props.soldOut) return null;
  return  <li className={`pizza ${props.soldOut ? "sold-out" : null }`}>
    <img src={props.photoName} alt={props.name} />
    <div>
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <span>{props.soldOut ? " SOLD-OUT ":props.price}</span>
    </div>
  </li>
};


function Footer() {
    const hour = new Date().getHours();
    let open = false;
    if (hour < 22 && hour > 12) open = 'true' ;
  return <footer className="footer">
    {
      open ? (
        < div className="order" >
          <p>
            We're open until 10:00 PM . Come Visit us or Order Online
          </p>
          <button className="btn">Order</button>
        </div>
      ): <p> Sorry We'are currently Close . Please Visit Us between 12:00 PM to 10:00 PM </p>
      }
    </footer>
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);