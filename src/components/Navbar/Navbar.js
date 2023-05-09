import React, { useState } from "react";
import "./Navbar.css";
import logo from "./logo.svg"

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className={showMenu ? "navbar-menu active" : "navbar-menu"}>
        <li className="navbar-item">
          <a href="#home">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#about">About</a>
        </li>
        <li className="navbar-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="navbar-item">
          <a href="#videos">Videos</a>
        </li>
        <li className="navbar-item">
          <a href="#contact">Contact</a>
        </li>
        <li className="navbar-item">
          <button>Login</button>
        </li>
      </ul>
      <div className="navbar-hamburger" onClick={handleMenuClick}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
