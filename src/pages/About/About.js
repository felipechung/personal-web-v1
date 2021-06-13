import React from "react";
import "./About.css";

function About() {
  return (
    <div className="gray-background" id="about">
      <div className="portfolio-container">
        <div className="title">
          <h3>A little bit </h3>
          <h1>About me</h1>
          <div className="about-content">
            <div className="text-content">
              <p className="about-text">
                Hi, My name is Felipe Chung. I am a Web Developer with a passion
                for front-end development. I enjoy building things for the web,
                from simple landing pages to eCommerce websites.
              </p>
              <p className="about-text">
                Some technologies I've been working with recently:
              </p>

              <div className="bullet-container">
                <ul className="about-text bullets">
                  <li className="bullet-text">HTML & CSS</li>
                  <li className="bullet-text">React</li>
                </ul>

                <ul className="about-text bullets">
                  <li className="bullet-text">JavaScript</li>
                  <li className="bullet-text">Node.js</li>
                </ul>
              </div>
            </div>
            <div className="profile-container">
              <img
                className="profile-picture"
                src="https://i.ibb.co/1LhcctZ/profile-111.png"
                alt="profile"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
