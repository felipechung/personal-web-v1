import React from "react";
import "./Main.css";
import { ReactTyped } from "react-typed";

function Main() {
  return (
    <div className="background">
      <div className="main-container" id="home">
        <div className="intro">
          <h1>
            Hi, my name is <span className="name">Felipe Chung</span>
          </h1>
          <h1>
            I design and build{" "}
            <ReactTyped
              strings={["websites.", "mobile apps.", "things."]}
              typeSpeed={100}
              loop
            />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Main;
