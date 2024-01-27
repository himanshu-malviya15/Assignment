// Cart.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // TODO: Fetch cart items from backend API
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("http://localhost:5200/products");
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart items", error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {/* Display cart items and total */}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{`Item ID: ${item.id}, Quantity: ${item.quantity}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
