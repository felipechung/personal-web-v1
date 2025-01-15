import React from "react";
import "./Portfolio.css";

import fitnessDashboard from "../../images/fitnessDashboard.png";
import Project from "../../components/Project/Project";
import CardList from "../../components/CardList/CardList";

function Portfolio() {
  return (
    <div className="dark-background" id="portfolio">
      <div className="portfolio-container">
        <div className="title">
          <h3>Portfolio</h3>
          <h2>Featured Projects</h2>
        </div>
        <div className="project-wrapper">
          <Project
            image={fitnessDashboard}
            title="Fitness Tracker"
            description="Personal project created to make me motivated at the gym. Plan your training, log your daily workouts, and track improvements over time."
            technologies={["React", "Vite", "Firebase", "Material UI"]}
            projectUrl="https://fitness-tracker-9442f.web.app/"
            imageStart
          />
        </div>
        <div className="center-title">
          <h2>Other projects</h2>
          <CardList />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
