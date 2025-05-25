import React from "react";
import { useOutletContext } from "react-router-dom";

const Checkout = () => {
  const { cart } = useOutletContext();
  return (
    <div>
      <h1>Cart Checkout Page</h1>
      <div className="checkout">
        <h1>Items: </h1>
        <ul>
          {" "}
          {cart.map((item) => (
            <li key={item.id}>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <li> {item.title}</li>
                <li>Quantity: {item.quantity}</li>
                <li>Price: {item.price * item.quantity}$</li>
              </ul>
            </li>
          ))}
        </ul>
        <h2>
          Total Price:{" "}
          {cart.reduce(
            (total, item) => (total += item.price * item.quantity),
            0
          )}
          $
        </h2>
      </div>
    </div>
  );
};

export default Checkout;
