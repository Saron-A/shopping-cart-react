import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  //in cart we have product and quantity, item represents the product and quantity, product represents id, name, price, etc. so if we want to display the product name, we can access it through item.name or
  return (
    <div style={{}}>
      <h1>Your Cart</h1>
      {cart.length <= 0
        ? "Your cart is empty!"
        : cart.map((item) => (
            <li key={item.id}>
              <div className="item">
                <p>Number of items: {item.quantity}</p>
                <h2>Item(s): {item.title}</h2>
                <p>Total Price: {item.price * item.quantity}</p>
              </div>
            </li>
          ))}

      <Link
        to="/"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "1rem",
          border: "1px solid black",
          borderRadius: "1rem",
          padding: "0.5rem",
          textDecoration: "none",
          backgroundColor: "#f0f0f0",
        }}
      >
        Go back to Products
      </Link>
    </div>
  );
};

export default Cart;
