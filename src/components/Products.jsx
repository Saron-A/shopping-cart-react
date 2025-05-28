import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cart from "./Cart.jsx"; // Import Cart component if needed
import "../index.css"; // Import your CSS styles

const Products = ({ setCart }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); // we are going to have objects in this array

  const [quantities, setQuantities] = useState({}); // this will hold the quantities for all products
  const [clicked, setClicked] = useState({}); // this will be used to track if the user has clicked on a product

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await axios.get("https://fakestoreapi.com/products");
        let items = response.data;
        setProducts(items);
        console.log(items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleSubmit = (e, product) => {
    e.preventDefault();
    const quantity = quantities[product.id] || 1; //access the quantity for the specific product by its id
    if (quantity <= 0) return; // Prevent adding products with zero or negative quantity
    const itemToAdd = { ...product, quantity }; // Create a new item with the product details and quantity
    setCart((prevCart) => [...prevCart, itemToAdd]); // Add the new item to the cart
    // navigate("/shopping/cart"); // Navigate to the shopping page
  };

  const incrementProduct = (id) => {
    setQuantities((prevQ) => ({ ...prevQ, [id]: (prevQ[id] || 0) + 1 }));
  };

  const decrementProduct = (id) => {
    setQuantities((prevQ) => ({
      ...prevQ,
      [id]: prevQ[id] > 0 ? prevQ[id] - 1 : 0,
    }));
  };

  const handleClick = (id) => {
    setClicked({ ...clicked, [id]: true });
  };

  return (
    <div className="products">
      {products.map((product) => (
        <li key={product.id}>
          <div className="product">
            <div className="fetched-data">
              <h3>{product.title}</h3>
              <div className="others">
                <div className="img-desc">
                  <img src={product.image} alt="" />
                  <p className="desc">{product.description}</p>
                </div>

                <div className="info">
                  <p className="price">Price: {product.price}$</p>
                  <p className="rating">Rating: {product.rating.rate}/5</p>
                  <p className="count">
                    {product.rating.count > 10
                      ? "In Stock"
                      : product.rating.count <= 10 && product.rating.count > 0
                      ? product.rating.count
                      : "Out of Stock"}
                  </p>
                </div>
              </div>
            </div>
            <div className="extras">
              <form action="" onSubmit={(e) => handleSubmit(e, product)}>
                <input
                  type="number"
                  className="quantity"
                  placeholder="Enter quantity"
                  value={quantities[product.id] || 1} // Default to 1 if no quantity is set
                  onChange={(e) =>
                    setQuantities({
                      ...quantities,
                      [product.id]: e.target.value,
                    })
                  }
                />
                <button
                  type="button"
                  onClick={() => incrementProduct(product.id)}
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => decrementProduct(product.id)}
                >
                  -
                </button>
                <button
                  className="addtocart"
                  onClick={() => handleClick(product.id)}
                  type="submit"
                  style={{
                    backgroundColor: clicked[product.id] ? "green" : "#f6f6f6",
                    color: clicked[product.id] ? "white" : "#3d3d3d",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  {clicked[product.id] ? " Added!" : "  Add to Cart"}
                </button>
              </form>
            </div>
          </div>
        </li>
      ))}
      <Link className="links" to="/shopping/cart" style={{}}>
        Go to Cart
      </Link>
    </div>
  );
};

export default Products;
