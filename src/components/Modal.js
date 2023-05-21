import React from 'react';
import ReactModal from "react-modal";
import styled from "styled-components"

ReactModal.setAppElement('#root');

export default function Modal({ isOpen, applyOverlay, title, children }) {
  const shouldApplyOverlayStyle = applyOverlay === "true";

  return (
    <ReactModal
      isOpen={isOpen === "true"}
      style={{
        overlay: shouldApplyOverlayStyle ? {
          background: "rgba(119, 119, 119, 0.8)",
          zIndex: 9999,
        } : {},
        content: {
          background: "#FFFFFF",
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
      <ModalTitle>{title}</ModalTitle>
      {children}
    </ReactModal>
  );
}

const ModalTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: #000000;
  font-size: 22px;
  font-weight: 700;
  display: flex;
`;
