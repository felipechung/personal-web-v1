import React from "react";
import "./SideButtons.css";
import * as FaIcons from "react-icons/fa";

function SideButtons() {
  return (
    <div className="sideButtons-container">
      <div className="buttons-wrapper">
        <a
          href="https://github.com/felipechung"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-me"
        >
          <FaIcons.FaGithubSquare></FaIcons.FaGithubSquare>
        </a>
        <a
          href="https://www.linkedin.com/in/felipechung/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-me"
        >
          <FaIcons.FaLinkedin></FaIcons.FaLinkedin>
        </a>

        <a
          href="https://www.instagram.com/chungfelipe"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-me"
        >
          <FaIcons.FaInstagram></FaIcons.FaInstagram>
        </a>
        <div className="bottom-line-left" />
      </div>
      <div className="email-wrapper">
        <a className="email-text" href="mailto:fchung.dev@gmail.com">
          fchung.dev@gmail.com
        </a>
        <div className="bottom-line-right" />
      </div>
    </div>
  );
}

export default SideButtons;
