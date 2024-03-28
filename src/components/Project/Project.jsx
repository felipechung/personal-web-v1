import React from "react";
import "./Project.css";
import * as FaIcons from "react-icons/fa";

function Project({
  image,
  title,
  description,
  technologies,
  demoUrl,
  codeUrl,
  imageStart,
}) {
  return (
    <div className="project-container">
      {imageStart && (
        <div className="img-container">
          <img className="project-img" src={image} alt="Project img" />
        </div>
      )}
      <div className="project-text-container">
        <span className="project-title">{title}</span>
        <p className="project-text">{description}</p>
        <ul className="technologies-container">
          {technologies.map((technology, index) => (
            <li className="technology" key={index}>
              {technology}
            </li>
          ))}
        </ul>
        {demoUrl && (
          <a
            className="project-icon"
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaIcons.FaExternalLinkAlt></FaIcons.FaExternalLinkAlt>
            <span className="projectLinkText">Demo</span>
          </a>
        )}

        {codeUrl && (
          <a
            className="project-icon"
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaIcons.FaGithub></FaIcons.FaGithub>
            <span className="projectLinkText">Code</span>
          </a>
        )}
      </div>

      {!imageStart && (
        <div className="img-container">
          <img className="project-img" src={image} alt="Project img" />
        </div>
      )}
    </div>
  );
}

export default Project;
