import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";

const Shopping = () => {
  const { cart, setCart, clicked, setClicked } = useOutletContext();

  return (
    <div>
      <Outlet context={{ cart, setCart, clicked, setClicked }} />
    </div>
  );
};

export default Shopping;
