// Import React dan komponen yang dibutuhkan
import React from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css";

// Komponen Homepage
const Homepage = () => {
  return (
    <div className="content">
      <div className="left">
        <h1>Welcome to GoIP (Go Inventory Products)</h1>
        <p>Your ultimate solution for inventory management. Streamline your product tracking, monitor stock levels, and enhance efficiency with our cutting-edge inventory management system designed to meet your business needs.</p>
        <Link className="btn" to="/list" style={{ fontWeight: 'bold' }}>Click Here!</Link>
      </div>
      <div className="right">
        <img src="https://img.freepik.com/free-vector/qa-engineers-concept-illustration_114360-1221.jpg?w=1060&t=st=1704605531~exp=1704606131~hmac=17c563f838d5c535829ad03e7228877c3b109812c29329081d38d91ef9ae6541" alt="inventory" />
      </div>
    </div>
  );
};

export default Homepage;
