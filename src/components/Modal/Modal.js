import React, { useState, useRef, useEffect } from "react";
import ReactDom from "react-dom";
import "./Modal.css";
import * as FaIcons from "react-icons/fa";

const portalRoot = document.getElementById("portal-root");

export default function Modal({ isOpen, onClickClose, project }) {
  const modalRef = useRef();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        setAnimate(true);
      });
    } else {
      setAnimate(false);
    }
  }, [isOpen]);
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClickClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <div className="modal-overlay" ref={modalRef} onClick={closeModal}>
      <div className={`modal ${animate ? "is-open" : ""}`}>
        <div className="modal-content">
          <div className="modal-header">
            <span className="modal-title">{project.name}</span>
            <button
              type="button"
              className="modal-close-button"
              onClick={onClickClose}
            >
              <FaIcons.FaTimes></FaIcons.FaTimes>
            </button>
          </div>
          <div className="content-container">
            <img className="modal-img" src={project.image} alt="Project img" />
          </div>
          <div className="content-container">
            <p className="modal-description">{project.description}</p>
          </div>

          <ul className="about-text bullets bullets-container">
            {project.technologies.map((tech) => {
              return <li className="bullet-text">{tech}</li>;
            })}
          </ul>

          <div className="modal-footer">
            <a
              className="modal-icon"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIcons.FaExternalLinkAlt></FaIcons.FaExternalLinkAlt>
              <span className="modal-text">Demo</span>
            </a>
            <a
              className="modal-icon"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIcons.FaCode></FaIcons.FaCode>
              <span className="modal-text">Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>,
    portalRoot
  );
}
