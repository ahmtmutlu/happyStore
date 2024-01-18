import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="brand-container">
          <span className="logo-text">
            <span style={{ color: "#FFD700" }}>Happy</span>
            <span style={{ color: "#DA70D6" }}>Store</span>
          </span>
        </div>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/feedbacks">Feedbacks</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
