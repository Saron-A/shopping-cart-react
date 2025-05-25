import React from "react";
import { useOutletContext } from "react-router-dom";
import Cart from "../components/Cart.jsx";

const Shopping = () => {
  const { cart, setCart } = useOutletContext();

  return (
    <div>
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
};

export default Shopping;
