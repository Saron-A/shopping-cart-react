import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    return savedCart;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [clicked, setClicked] = useState(() => {
    const savedClicked = localStorage.getItem("clicked");
    try {
      return savedClicked ? JSON.parse(savedClicked) : {};
    } catch (e) {
      console.error("Invalid clicked state in localStorage:", e);
      return {};
    }
  }); // this will be used to track if the user has clicked on a product

  useEffect(() => {
    localStorage.setItem("clicked", JSON.stringify(clicked));
  }, [clicked]);

  return (
    <div>
      <Outlet context={{ cart, setCart, clicked, setClicked }} />
    </div>
  );
};

export default Layout;
