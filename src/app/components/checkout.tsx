// Checkout.js
import React, { useState } from "react";
import axios from "axios";

const Checkout = () => {
  const [email, setEmail] = useState("");
  const [cartData, setCartData] = useState([]);
  const [discountCode, setDiscountCode] = useState("");

  const handleCheckout = async () => {
    try {
      const response = await axios.post("http://localhost:5200/checkout", {
        email,
        cartData,
        discountCode,
      });

      console.log("Checkout successful:", response.data);
    } catch (error) {
      console.error("Error during checkout", error);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      {/* Form to enter email, cart items, and discount code */}
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Discount Code:</label>
      <input type="text" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} />

      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Checkout;
