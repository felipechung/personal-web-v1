import React from "react";

function Card(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.image} alt="imag" width="500" height="600"></img>
    </div>
  );
}

export default Card;
