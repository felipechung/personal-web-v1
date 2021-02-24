import React from "react";
import "./Main.css";

function Main() {
  return (
    <div className="main-container" id="home">
      <div className="intro">
        {/* <h3>Hello, I'm</h3> */}
        <h1>
          Hi, my name is <span className="name">Felipe Chung</span>
        </h1>
        <h1>i design and develop things</h1>
      </div>
    </div>
  );
}

export default Main;
