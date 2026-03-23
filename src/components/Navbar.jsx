import React, { useState } from 'react';
import logo from '../assets/images/image.png';
import nigeriaFlag from '../assets/images/NG.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="palmpay-navbar navbar navbar-expand-lg">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src={logo} alt="PalmPay" />
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto gap-1">
            <li className="nav-item">
              <a className="nav-link" href="#">Company</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Personal</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Impact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Newsroom</a>
            </li>
          </ul>

          {/* Right side: Login + Country */}
          <div className="d-flex align-items-center gap-3 ms-auto ms-lg-0">
            <a href="#" className="btn-login">Log In</a>
            <button className="country-selector">
              <img src={nigeriaFlag} alt="Nigeria" />
              <span>Nigeria</span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;