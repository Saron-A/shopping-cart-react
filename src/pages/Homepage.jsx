import React from "react";
import Header from "../components/Header.jsx";
import Products from "../components/Products.jsx";
import { useOutletContext } from "react-router-dom";

const Homepage = () => {
  const { cart, setCart } = useOutletContext();
  return (
    <div>
      <Header cart={cart} setCart={setCart} />
      <Products cart={cart} setCart={setCart} />
    </div>
  );
};

export default Homepage;
