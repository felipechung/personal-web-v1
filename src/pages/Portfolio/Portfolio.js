import React from "react";
import "./Portfolio.css";
import CardList from "../../components/CardList/CardList";

function Portfolio() {
  return (
    <div className="dark-background">
      <div className="portfolio-container" id="portfolio">
        <div className="title">
          <h3>Portfolio</h3>
          <h1>Recent Projects</h1>
          <p>These are the most recent projects I’ve worked on</p>
        </div>
        <CardList></CardList>

        <div></div>
      </div>
    </div>
  );
}

export default Portfolio;
