// Admin.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [purchaseSummary, setPurchaseSummary] = useState({});

  useEffect(() => {
    // TODO: Fetch purchase summary from backend API
    const fetchPurchaseSummary = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5200/admin/purchaseSummary"
        );
        setPurchaseSummary(response.data);
      } catch (error) {
        console.error("Error fetching purchase summary", error);
      }
    };

    fetchPurchaseSummary();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {/* Display purchase summary details */}
      <pre>{JSON.stringify(purchaseSummary, null, 2)}</pre>
    </div>
  );
};

export default Admin;
