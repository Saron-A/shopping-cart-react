import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cart from "./Cart.jsx"; // Import Cart component if needed

const Products = ({ setCart }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); // we are going to have objects in this array

  const [quantities, setQuantities] = useState({}); // this will hold the quantities for all products

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
    const quantity = quantities[product.id] || 0; //access the quantity for the specific product by its id
    if (quantity <= 0) return; // Prevent adding products with zero or negative quantity
    const itemToAdd = { ...product, quantity }; // Create a new item with the product details and quantity
    setCart((prevCart) => [...prevCart, itemToAdd]); // Add the new item to the cart
    navigate("/shopping"); // Navigate to the shopping page
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

  return (
    <div className="products">
      <h2>Products</h2>
      {products.map((product) => (
        <li key={product.id}>
          <div className="product">
            <div className="fetched-data">
              <img src={product.image} alt="" height="100px" width="100px" />
              <h3>{product.title}</h3>
              <p className="desc">{product.description}</p>
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
            <div className="extras">
              <form action="" onSubmit={(e) => handleSubmit(e, product)}>
                <input
                  type="number"
                  className="quantity"
                  placeholder="Enter quantity"
                  value={quantities[product.id] || 0}
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
                <button type="submit">Add to Cart</button>
              </form>
            </div>

            <Link
              to="shopping"
              style={{
                position: "fixed",
                bottom: "2rem",
                right: "1rem",
                border: "0.5px solid black",
                borderRadius: "1.5rem",
                padding: "0.5rem 1rem",
                textDecoration: "none",
                backgroundColor: "#f0f0f0",
              }}
            >
              Go to Cart
            </Link>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Products;
