import React from "react";
import "./Portfolio.css";
import CardList from "../../components/CardList/CardList";

function Portfolio() {
  return (
    <div className="dark-background" id="portfolio">
      <div className="portfolio-container">
        <div className="title">
          <h3>Portfolio</h3>
          <h2>Recent Projects</h2>
          <p>These are the most recent projects I’ve worked on</p>
        </div>
        <CardList></CardList>
      </div>
    </div>
  );
}

export default Portfolio;
