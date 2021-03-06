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
              Apenas um brasileirinho tentando a vida
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
