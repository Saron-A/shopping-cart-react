import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]); // we are going to have objects in this array
  const [count, setCount] = useState(0); // this is for the quantity of the product

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

  const incrementProduct = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementProduct = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
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
              <form action="">
                <input
                  type="text"
                  className="quantity"
                  placeholder="Enter quantity"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                />
                <button onClick={incrementProduct}>+</button>
                <button onClick={decrementProduct}>-</button>
                <button type="submit">Add to Cart</button>
              </form>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Products;
