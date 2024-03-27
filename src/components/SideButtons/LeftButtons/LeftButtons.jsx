import React from "react";
import "./LeftButtons.css";
import * as FaIcons from "react-icons/fa";

function LeftButtons() {
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
    </div>
  );
}

export default LeftButtons;
