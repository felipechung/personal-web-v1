import React from "react";
import "./Portfolio.css";
import creditoJaImage from "../../images/lcc10.png";
import finderImage from "../../images/finder1.png";
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
          <Project
            image={creditoJaImage}
            title="Credito Ja"
            description=" Financial solutions website, designed to streamline your credit
          search. Project developed under my time at B2bit Company."
            technologies={["Next.js", "React", "Vite", "Styled Components"]}
            projectUrl="https://www.creditoja.rn.sebrae.com.br/"
          />
          <Project
            image={finderImage}
            title="Finder"
            description="This is a white-label solution designed for the internal management of law firms.
          "
            technologies={["React", "Vite", "Styled Components"]}
            projectUrl="https://www.finder.b2bit.company/login/"
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
