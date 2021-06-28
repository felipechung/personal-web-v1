import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";

const portalRoot = document.getElementById("portal-root");

export default function Modal({ children, isOpen, onClickClose }) {
  if (!isOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <button
          type="button"
          className="modal-close-button"
          onClick={onClickClose}
        >
          X
        </button>
        {children}
      </div>
    </div>,
    portalRoot
  );
}
