import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";

const Shopping = () => {
  const { cart, setCart } = useOutletContext();

  return (
    <div>
      <Outlet context={{ cart, setCart }} />
    </div>
  );
};

export default Shopping;
