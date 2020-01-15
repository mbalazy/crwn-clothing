import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';

const Header = () => (
  <div className="header">
    <Link to="/">logo</Link>

    <div className="nav-links">
      <Link to="/shop">SHOP</Link>
      <Link to="/contact">CONTACT</Link>
      <Link to="/sing_in">SIGN IN</Link>
      <Link to="/cart">CART</Link>
    </div>
  </div>
);
export default Header;
