import React from "react";
import "./Modal.css";

const Modal = (props) => {
  const { openModal, onClose, title, children } = props;

  return (
    openModal && (
      <div className="main-modal" onClick={onClose}>
        <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <div>{title}</div>
              <button onClick={onClose} style={{ cursor: "pointer" }}>
                Close
              </button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
