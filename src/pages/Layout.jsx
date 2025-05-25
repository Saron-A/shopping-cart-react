import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Outlet context={{ cart, setCart }} />
    </div>
  );
};

export default Layout;
