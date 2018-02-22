import React from 'react';
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

const Navigation = () => {
  return(
    <div className="topbar-right">
      <ul className="topbar-nav nav">
        <li className="nav-link"><Link to="/">Home</Link></li>
        <li className="nav-link"><Link to="/#about">About</Link></li>
        <li className="nav-link"><Link to="/products">Products</Link></li>
        <li className="nav-link"><Link to="/portfolio">Portfolio</Link></li>
        <li className="nav-link"><Link to="/#contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navigation;
