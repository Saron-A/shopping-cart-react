import React from "react";
import Header from "../components/Header.jsx";
import Products from "../components/Products.jsx";
import { useOutletContext } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import "../index.css";

const Homepage = () => {
  const { cart, setCart } = useOutletContext();
  return (
    <div className="container">
      <Header cart={cart} setCart={setCart} />
      <Products cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
};

export default Homepage;
