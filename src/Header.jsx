import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="title-link">
        <h1 className="title">E-Commerce</h1>
      </Link>
      <input
        type="text"
        placeholder="Search for products..."
        className="search-bar"
      />
      <button className="cart-button">Cart</button>
    </header>
  );
}

export default Header;
