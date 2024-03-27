import React from "react";
import "./Portfolio.css";
import projectImage from "../../images/lcc10.png";
import Project from "../../components/Project/Project";

function Portfolio() {
  return (
    <div className="dark-background" id="portfolio">
      <div className="portfolio-container">
        <div className="title">
          <h3>Portfolio</h3>
          <h2>Recent Projects</h2>
        </div>
        <Project
          image={projectImage}
          title="Credito ja"
          description=" Financial solutions website, designed to streamline your credit
          search. Project developed under my time at B2bit Company."
          technologies={["Next.js", "React", "Vite", "Styled Components"]}
          demoUrl="https://www.creditoja.rn.sebrae.com.br/"
        />
      </div>
    </div>
  );
}

export default Portfolio;
