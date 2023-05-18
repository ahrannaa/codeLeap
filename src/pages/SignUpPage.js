import styled from "styled-components";
import { useState, useEffect } from 'react';
import Modal from "react-modal";

export default function SignUpPage(){
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <>
    {showModal && (
      <Modal
      isOpen={showModal}
      style={{
         content: {
           width: "500px",
           height: "205px",
           background: " #FFFFFF",
           borderRadius: "16px",
           borderSizing: "border-box;",
           top: "50%",
           left: "50%",
           right: "auto",
           bottom: "auto",
           marginRight: "-50%",
           transform: "translate(-50%, -50%)",
        }
      }}
      >
        <ModalTitle>Welcome to CodeLeap network!</ModalTitle>
         <ModalSubTitle>Please enter your username </ModalSubTitle>
         <InputName type="text" value={name}  
         onChange={e => setName(e.target.value)}
         required
         name="Name"
         placeholder="Name"/>
         <Box>
          <ModalButton onClick={() => setShowModal(false)}>ENTER</ModalButton>
         </Box>
      </Modal>
    )}
   </> 
  );
};

const ModalTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: #000000;
  font-size: 22px;
  font-weight: 700;
  display: flex;
`;
const ModalSubTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: #000000;
  font-size: 16px;
  font-weight: 400;
  display: flex;
`;
const InputName = styled.input`
  width: 452px;
  height: 32px;
  border: 1px solid #777777;
  border-radius: 8px;
  color: #DDDDDD;
  
  ::placeholder {
    font-size: 50px;
  };
`;
const Box = styled.div`
 display: flex;
 justify-content:end;
 margin-right: 40px;
`;
const ModalButton = styled.button`
  width: 111px;
  height: 32px;
  background: #7695EC;
  border-radius: 8px;
  border: none;
  margin-top: 10px;
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 16px;
`;