// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img 
            src="https://cdn.worldvectorlogo.com/logos/trello.svg" 
            alt="Trello Logo" 
            className="logo"
          />
          <h1>Trello Clone</h1>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Features</Link></li>
          <li><Link to="/solutions">Solutions</Link></li>
          <li><Link to="/plans">Plans</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/resources">Resources</Link></li>
        </ul>
        <div className="navbar-actions">
          <Link to="/login" className="login">Log in</Link>
          <Link to="/signup" className="cta-button">Get Trello for free</Link>
        </div>
      </nav>
      <div className="navbar-notification">
        Accelerate your teams' work with Atlassian Intelligence (AI) features 🤖 now available for all Premium and Enterprise! <a href="/learn-more">Learn more.</a>
      </div>
    </>
  );
}

export default Navbar;
