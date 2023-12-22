import { React, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
// import pizzaData from "./data.js";

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
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

const Menu = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((za) => (
              <Pizza za={za} key={za.name} />
            ))}
          </ul>
        </>
      ) : <p>We're still working on our menu. Please come back later</p>}
    </main>
  );
}

const Pizza = ({ za }) => {
  return (
    <li className={`pizza ${za.soldOut ? "sold-out" : null}`}>
      <img src={za.photoName} alt={za.name} />
      <div>
        <h3>{za.name}</h3>
        <p>{za.ingredients}</p>
        <span>{za.soldOut ? "SOLD OUT" : za.price}</span>
      </div>
    </li>
  )
}

const Order = ({ closeHour }) => {
  return (
    <div className="order">
      <p>"We're open until {closeHour}:00. Come visit us or order online."</p>
      <button className="btn">Order</button>
    </div>
  );
}

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 0;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? <Order closeHour={closeHour} /> : <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>}
    </footer>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);