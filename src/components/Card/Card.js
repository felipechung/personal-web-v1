import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card-container">
      <p className="project-title">{props.name}</p>
      <img src={props.image} alt="imag" width="300" height="250"></img>
    </div>
  );
}

export default Card;
