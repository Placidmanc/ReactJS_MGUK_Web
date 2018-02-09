import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


const FooterNavigation = (props) => {
  return(
    <div className="nav flex-column pl-20">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/#about">About</Link>
      <Link className="nav-link" to="/products">Products</Link>
      <Link className="nav-link" to="/portfolio">Portfolio</Link>
      <Link className="nav-link" to="/#contact">Contact</Link>
    </div>
  )
}

export default FooterNavigation;
