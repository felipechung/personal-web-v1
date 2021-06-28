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

          <img className="modal-img" src={project.image} alt="Project img" />
          <p>{project.description}</p>
          <ul className="about-text bullets">
            {project.technologies.map((tech) => {
              return <li className="bullet-text">{tech}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>,
    portalRoot
  );
}
