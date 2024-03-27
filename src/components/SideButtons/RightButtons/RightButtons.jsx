import React from "react";
import "./RightButtons.css";

function RightButtons() {
  return (
    <div className="rightButtons-container">
      <div className="email-wrapper">
        <a className="email-text" href="mailto:fchung.dev@gmail.com">
          fchung.dev@gmail.com
        </a>
        <div className="bottom-line-right" />
      </div>
    </div>
  );
}

export default RightButtons;
