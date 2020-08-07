import React from "react";
import styled from "styled-components";

const Modal = ({ children, show, setShow }) => {
  const content = show && (
    <ModalContainer>
      <div className="overlay">
        <div className="modal">
          <button
            className="modal-close"
            type="button"
            onClick={() => setShow(false)}
          >
            X
          </button>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </ModalContainer>
  );

  return content;
};

export default Modal;

const ModalContainer = styled.div`
widht: 100%:
height: 100%;
display: flex;
align-items: center;
    justify-content: center;

  .overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 98;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .modal {
    position: relative;
    z-index: 99;
    width: 100%;
    max-width: 20rem;
    max-height: 100%;
    margin: 0 auto;
  }

  .modal-close {
    position: absolute;
    font-size: 20px;
    top: -1.5rem;
    right: 0;
    padding: 5px;
    border: 0;
    -webkit-appearance: none;
    background: none;
    color: white;
    cursor: pointer;
  }
`;
