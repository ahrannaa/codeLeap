import React from 'react';
import ReactModal from "react-modal";
import styled from "styled-components"

ReactModal.setAppElement('#root');

export default function Modal(props) {
  const isOpen = props.isOpen === "true"
  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        content: {
          background: " #FFFFFF",
          borderRadius: "16px",
          borderSizing: "border-box",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        }
      }}
    >
      <ModalTitle>{props.title}</ModalTitle>
      {props.children}
    </ReactModal>
  )
}

const ModalTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: #000000;
  font-size: 22px;
  font-weight: 700;
  display: flex;
`
