import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length <= 0
        ? "Your cart is empty!"
        : cart.map((item) => <li>{item.id}</li>)}
    </div>
  );
};

export default Cart;
