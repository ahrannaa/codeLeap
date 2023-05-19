import styled from "styled-components";
import { useState } from 'react';
import Modal from "react-modal"
import { useSelector } from "react-redux";
import { selectUser } from '../redux/userSlice'


export default function Posts(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [postReceived, setPostReceived] = useState(false);
  const { name } = useSelector(selectUser)

  function openModal() {
    setModalIsOpen(true);
  };

  return (
    <Box>
      <HeaderLayout>
        <p>My First Post at CodeLeap Network!</p>
        <div>
          <ion-icon name="trash-bin-outline"></ion-icon>
          <ion-icon onClick={openModal} name="create-outline"></ion-icon>
          <Modal
            isOpen={modalIsOpen}
            style={customStyles}
          >
            <Info>Edit item</Info>
            <InputWrapper>
              <Label>Title</Label>
              <TitleInput
                required
                name="Name"
                placeholder="Hello World" />
              <Label>Content</Label>
              <ContentInput
                required
                name="Name"
                placeholder="Content Here" />
            </InputWrapper>
            <BoxButton>
              <Button>Create</Button>
              <Button>Create</Button>
            </BoxButton>
          </Modal>
        </div>
      </HeaderLayout>
      <Infos>
        <Name>@{name}</Name>
        <Date>25 minutes ago</Date>
      </Infos>
      <Content>Curabitur suscipit suscipit tellus.
        Phasellus consectetuer vestibulum elit.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Maecenas egestas arcu quis ligula mattis placerat.
        Duis vel nibh at velit scelerisque suscipit.
        Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
        Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat</Content>
    </Box>
  )
};

const Box = styled.div`
 width: 752px;
 height: 334px;
 margin-top: 20px;
 margin-left: auto;
 margin-right: auto;
 background: #FFFFFF;
 border: 1px solid #999999;
 border-radius: 16px;
 box-sizing: border-box;
`;
const HeaderLayout = styled.div`
  width:752px;
  height:70px;
  background:#7695EC;;
  border-radius: 16px 16px 0px 0px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;

  p {
   margin-left:20px;
  }

  ion-icon { 
      font-size:20px;
      font-weight: 700;
      color:#FFFFFF;
      margin-top:24px;
      margin-left:5px;
      margin-right:20px;
      text-align:center;
    }
`;
const Infos = styled.div`
 display: flex;
 justify-content: space-between;
`;
const Paragraph = styled.p`
 font-family: 'Roboto';
 font-size: 18px;
 font-style: normal;
 color: #777777;
`;
const Name = styled(Paragraph)`
  margin-left:10px;
  font-weight: 700;
`;
const Date = styled(Paragraph)`
  margin-right:10px;
  font-weight: 400;
`;
const Content = styled.p`
 font-family: 'Roboto';
 font-style: normal;
 font-weight: 400;
 font-size: 18px;
 line-height: 21px;
 margin-left:10px;
 margin-right:10px;
`;
const customStyles = {
  content: {
    width: "660px",
    height: "334px",
    background: "#FFFFFF",
    borderRadius: "16px",
    border: "1px solid #999999",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const Info = styled.h1`
 font-family: 'Roboto';
 font-style: normal;
 font-weight: 700;
 font-size: 22px;
`
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
`;
const Input = styled.input`
  background: #FFFFFF;
  border: 1px solid #777777;
  border-radius: 8px; 
  margin-left: auto;
  margin-right: auto;
`;
const TitleInput = styled(Input)`
  width: 612px;
  height: 32px;
`;
const ContentInput = styled(Input)`
 width: 612px;
 height: 74px;
`;
const BoxButton = styled.div`
  display: flex;
  justify-content:end;
`
const Button = styled.button`
  width: 120px;
  height: 32px;
  background: #7695EC;
  border-radius: 8px;
  border: none;
  margin-top: 10px;
  margin-right: 10px;
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 16px;
`;