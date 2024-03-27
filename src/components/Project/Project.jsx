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
}) {
  return (
    <div className="project-container">
      <img className="project-img" src={image} alt="Project img" />
      <div className="project-text-container">
        <span className="project-title">{title}</span>
        <p className="project-text">{description}</p>
        <ul className="technologies-container">
          {technologies.map((technology) => (
            <li className="technology">{technology}</li>
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
    </div>
  );
}

export default Project;
