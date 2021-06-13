import React from "react";
import "./Contact.css";
import * as FaIcons from "react-icons/fa";

function Contact() {
  return (
    <div className="dark-background" id="contact">
      <div className="contact-container">
        <a className="contact-icon" href="mailto:fchung.dev@gmail.com">
          <FaIcons.FaTelegramPlane></FaIcons.FaTelegramPlane>
        </a>
        <h1>Get In Touch</h1>
        <p>Feel free to contact me anytime!</p>
        <button>Send a Message</button>
      </div>
    </div>
  );
}

export default Contact;
