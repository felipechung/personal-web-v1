import React, { useState } from "react";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMobileMenu}>
          &lt;fchung/&gt;
        </a>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FaIcons.FaTimes color="#EEEEEE" />
          ) : (
            <FaIcons.FaBars color="#EEEEEE" />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a className="nav-links" href="#home" onClick={closeMobileMenu}>
              <span className="nav-icon">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={closeMobileMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
