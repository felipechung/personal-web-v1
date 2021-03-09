import React from "react";
import "./About.css";

function About() {
  return (
    <div className="dark-background" id="about">
      <div className="portfolio-container">
        <div className="title">
          <h1>About</h1>
          <div className="about-content">
            <p className="about-text">
              Hi, My name is Felipe Chung. I am a Web Developer with a passion
              for front-end development. I enjoy building things for the web,
              from simple landing pages to eCommerce websites.
            </p>
            <img
              className="profile-picture"
              src="https://i.ibb.co/SVvtgKL/pic.jpg"
              alt="profile"
              width="300px"
              height="250px"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
