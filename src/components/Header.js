// src/components/Header.js
import React, { useState } from 'react';
import { FaSearch, FaTh, FaUser, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import wr7logo from '../assets/wr7logo.png';
import Categories from './Categories';

function Header() {
  const navigate = useNavigate();
  const [showCategories, setShowCategories] = useState(false);

  const goToCart = () => {
    navigate('/cart');
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={wr7logo} alt="WingReads7 Logo" className="logo-image" />
          <div className="logo-text">WingReads7</div>
        </div>
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Search books..." />
          <FaSearch className="icon search-icon" />
        </div>
        <div className="icons">
          <FaShoppingCart className="icon" onClick={goToCart} />
          <FaTh className="icon" onClick={toggleCategories} />
          <FaUser className="icon" />
        </div>
      </header>
      {showCategories && <Categories />}
    </>
  );
}

export default Header;
