import React from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

const Cart = () => {
  const { cart } = useOutletContext();
  //in cart we have product and quantity, item represents the product and quantity, product represents id, name, price, etc. so if we want to display the product name, we can access it through item.name or
  let navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length <= 0) {
      alert("Your cart is empty!");
      return;
    }

    navigate("/shopping/checkout");
  };
  return (
    <div>
      <h1>Your Cart</h1>
      <div
        className="cart"
        style={{ border: "1px solid black", padding: "1rem" }}
      >
        {cart.length <= 0
          ? "Your cart is empty!"
          : cart.map((item) => (
              <li key={item.id}>
                <div className="item">
                  <p>Number of items: {item.quantity}</p>
                  <h2>{item.title}</h2>
                  <p>Total Price: {item.price * item.quantity}$</p>
                </div>
              </li>
            ))}
      </div>

      <button
        onClick={() => handleCheckout(cart)}
        type="button"
        style={{
          border: "1px solid black",
          borderRadius: "1rem",
          padding: "0.5rem 1rem",
          marginTop: "1rem",
        }}
      >
        Check Out
      </button>

      <Link
        to="/"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "1rem",
          border: "1px solid black",
          borderRadius: "1rem",
          padding: "0.5rem",
          textDecoration: "none",
          backgroundColor: "#f0f0f0",
        }}
      >
        Go back to Products
      </Link>
    </div>
  );
};

export default Cart;
