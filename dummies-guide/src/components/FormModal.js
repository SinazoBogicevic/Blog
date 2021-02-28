import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const FormModal = () => {
  const openModal = useSelector((state) => state.openModal.isSent);
  //console.log(JSON.stringify(openModal));

  /** 
  if (openModal) {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
  }*/

  const closeModal = () => {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    console.log("close modal");
  };
  return (
    <ModalWrapper id="modal" openModal onClick={closeModal}>
      <div className="modal-content">
        <i className="fas fa-times" onClick={closeModal} />
        <div>
          <h3>Hi, thanks for reaching out</h3>
          <p>I'll get back to you as soon as I can</p>
        </div>
      </div>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;

  .modal-content {
    width: 70%;
    height: fit-content;
    padding: 20px;
    background-color: var(--white);

    i {
      float: right;
      color: var(--light-gray);
      &:hover {
        color: var(--black);
        cursor: pointer;
      }
    }

    & > div {
      width: fit-content;
      margin: 5% auto 0px;
      text-align: center;

      p {
        margin-top: 8px;
      }
    }
  }
`;

export default FormModal;
