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

  return (
    <div>
      <Outlet context={{ cart, setCart }} />
    </div>
  );
};

export default Layout;
