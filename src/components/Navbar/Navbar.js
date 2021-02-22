import React, { useState } from "react";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <FaIcons.FaBars className="nav-icon"></FaIcons.FaBars>
        <ul className="nav-items">
          <li className="nav-item">
            <a href="#footer" className="nav-links">
              <FaIcons.FaHome className="nav-icon"></FaIcons.FaHome>
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links">
              <FaIcons.FaUser className="nav-icon"></FaIcons.FaUser>
              <span>About</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-links">
              <FaIcons.FaLayerGroup className="nav-icon"></FaIcons.FaLayerGroup>
              <span>Portfolio</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">
              <FaIcons.FaComments className="nav-icon"></FaIcons.FaComments>
              <span>Contact</span>
            </a>
          </li>
          <div className="links">
            <li className="nav-item nav-links ">
              <a href="#linkedin" id="linkedin">
                <FaIcons.FaLinkedinIn></FaIcons.FaLinkedinIn>
              </a>
              <a href="#github">
                <FaIcons.FaGithub></FaIcons.FaGithub>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
