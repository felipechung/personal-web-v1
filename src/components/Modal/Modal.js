import React, { useRef } from "react";
import ReactDom from "react-dom";
import "./Modal.css";

const portalRoot = document.getElementById("portal-root");

export default function Modal({ isOpen, onClickClose, project }) {
  const modalRef = useRef();

  if (!isOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <div className="modal-overlay" ref={modalRef} onClick={onClickClose}>
      <div className="modal">
        <button
          type="button"
          className="modal-close-button"
          onClick={onClickClose}
        >
          X
        </button>
        {project.name}
      </div>
    </div>,
    portalRoot
  );
}
