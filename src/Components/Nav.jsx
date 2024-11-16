import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './images/AssignerLogo.png';
import './Nav.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="sec-navbar">
        <div className="logo">
          <a href="#"><img src={logo} alt="Assigner Logo" className="navbar-logo" /></a>
        </div>
        <ul className='links'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">IELTS & PTE</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <a href="#" className="login-btn">Login</a>
        <div className="toggle-btn" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" color="black" />
        </div>
      </div>

      {/* Dropdown Menu*/}
      <div className={`dropdown_menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">IELTS & PTE</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
