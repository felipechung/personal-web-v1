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
    <a
      href={demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="project-container"
    >
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
      </div>

      {!imageStart && (
        <div className="img-container">
          <img className="project-img" src={image} alt="Project img" />
        </div>
      )}
    </a>
  );
}

export default Project;
