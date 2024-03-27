import React from "react";
import "./Portfolio.css";
import creditoJaImage from "../../images/lcc10.png";
import finderImage from "../../images/finder1.png";
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
          image={creditoJaImage}
          title="Credito Ja"
          description=" Financial solutions website, designed to streamline your credit
          search. Project developed under my time at B2bit Company."
          technologies={["Next.js", "React", "Vite", "Styled Components"]}
          demoUrl="https://www.creditoja.rn.sebrae.com.br/"
          imageStart
        />
        <Project
          image={finderImage}
          title="Finder"
          description="This is a white-label solution designed for the internal management of law firms.
          "
          technologies={["React", "Vite", "Styled Components"]}
          demoUrl="https://www.finder.b2bit.company/login/"
        />
      </div>
    </div>
  );
}

export default Portfolio;
