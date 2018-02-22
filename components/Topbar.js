import React from 'react';
import Navigation from './Navigation';

const Topbar = (props) => {
  return(
    <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
      <div className="container">

        <div className="topbar-left">
          <button className="topbar-toggler">&#9776;</button>
          <a className="topbar-brand" href="https://mediagrand.co.uk/">
            <img className="logo-default" src="assets/img/logo.png" alt="logo" />
            <img className="logo-inverse" src="assets/img/logo-light.png" alt="logo" />
          </a>
        </div>

        <Navigation />

      </div>
    </nav>
  )
}

export default Topbar;
