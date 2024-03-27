import React from "react";
import "./About.css";
import profilePicture from "../../images/pic.jpg";

function About() {
  return (
    <div className="gray-background" id="about">
      <div className="portfolio-container">
        <div className="title">
          <h3>A little bit </h3>
          <h2>About me</h2>
          <div className="about-content">
            <div className="text-content">
              <p className="about-text">
                Hi, My name is Felipe Chung. I am a Web Developer with a passion
                for front-end development. I enjoy building things for the web,
                from simple landing pages to more complex projects.
              </p>
              <p className="about-text">
                Some technologies I've been working with recently:
              </p>

              <div className="bullet-container">
                <ul className="about-text bullets">
                  <li className="bullet-text">React</li>
                  <li className="bullet-text">Typescript</li>
                  <li className="bullet-text">React Native</li>
                </ul>

                <ul className="about-text bullets">
                  <li className="bullet-text">Next.js</li>
                  <li className="bullet-text">Firebase</li>
                  <li className="bullet-text">Styled Components</li>
                </ul>
              </div>
            </div>
            <div className="profile-container">
              <img
                className="profile-picture"
                src={profilePicture}
                alt="profile"
              ></img>
              <div className="squared-border" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
