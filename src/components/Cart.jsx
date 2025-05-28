import React from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import "../index.css"; // Import your CSS styles

const Cart = () => {
  const { cart, setCart } = useOutletContext();
  const { clicked, setClicked } = useOutletContext(); // we can use this to track if the user has clicked on a product, but we don't need it in this component
  //in cart we have product and quantity, item represents the product and quantity, product represents id, name, price, etc. so if we want to display the product name, we can access it through item.name or
  let navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length <= 0) {
      alert("Your cart is empty!");
      navigate("/");
      return;
    }

    navigate("/shopping/checkout");
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);

    const updatedClicked = { ...clicked };
    delete updatedClicked[id]; // Remove that product's clicked status
    setClicked(updatedClicked);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart">
        {cart.length <= 0 ? (
          "Your cart is empty!"
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div className="item">
                  <div className="sub-item">
                    <p>Quantity: {item.quantity}</p>
                    <p>Total Price: {item.price * item.quantity}$</p>
                  </div>

                  <h3>{item.title}</h3>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <button
          className="checkout-btn"
          onClick={() => handleCheckout(cart)}
          type="button"
        >
          Check Out
        </button>

        <Link to="/" className="links">
          Go back to Products
        </Link>
      </div>
    </div>
  );
};

export default Cart;
