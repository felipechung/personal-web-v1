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
        <h2 className="contact-text">Get In Touch</h2>
        <p className="contact-text">Feel free to contact me anytime!</p>
        <a className="send-button" href="mailto:fchung.dev@gmail.com">
          Send a Message
        </a>
      </div>
    </div>
  );
}

export default Contact;
