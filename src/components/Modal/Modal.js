import React, { useRef } from "react";
import ReactDom from "react-dom";
import "./Modal.css";
import * as FaIcons from "react-icons/fa";

const portalRoot = document.getElementById("portal-root");

export default function Modal({ isOpen, onClickClose, project }) {
  const modalRef = useRef();

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
      <div className="modal">
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
            <FaIcons.FaExternalLinkAlt></FaIcons.FaExternalLinkAlt>
            <span>Demo</span>
            <FaIcons.FaCode></FaIcons.FaCode>
            <span>Code</span>
          </div>
        </div>
      </div>
    </div>,
    portalRoot
  );
}
