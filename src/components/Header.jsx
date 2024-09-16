import React from 'react';
import './Header.css';
import 'boxicons'


const Header = () => {
  return (
    <header className="header">
      <div className="freeShipping">Free shipping on all orders above ₹500</div>
      <div className="navbar">
        <div className="searchBarContainer  ">
          <input type="text" placeholder="Search..." className="searchBar" />
          <button className="searchButton">Search</button>
        </div>
        <div className="navIcons">
          <button className="navButton">
           <box-icon  name='log-in' ></box-icon> Login
          </button>
          <button className="navButton">
          <box-icon className='box-icon' name='home'></box-icon>Home
          </button>
          <button className="navButton">
          <box-icon className='box-icon' name='cart' ></box-icon> Cart
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
