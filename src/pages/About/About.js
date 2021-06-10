import React from "react";
import "./About.css";

function About() {
  return (
    <div className="dark-background" id="about">
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
              <ul>
                <li>HTML & CSS</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>Node.js</li>
              </ul>
            </div>

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
