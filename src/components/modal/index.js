import React from "react";
import "./styles.css";

function Modal(props) {
  return (
    <section className={`modal ${props.theme}`}>
      <section className="modal-content">
        <header className="modal-header">
          <h2>{props.title}</h2>
          <button
            className="modal-close-button"
            onClick={props.onClose}
          ></button>
        </header>

        <div className="modal-body">{props.children}</div>

        {props.displayControls && (
          <footer className="modal-footer">
            <button
              className="button button--secondary"
              onClick={props.onLeftButtonClick}
            >
              {props.leftButtonLabel}
            </button>
            <button className="button" onClick={props.onRightButtonClick}>
              {props.rightButtonLabel}
            </button>
          </footer>
        )}
      </section>
    </section>
  );
}

Modal.defaultProps = {
  displayControls: true,
  leftButtonLabel: "Cancel",
  rightButtonLabel: "Let's go",
};

export default Modal;
