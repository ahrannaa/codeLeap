import { useState } from "react";
import styled from "styled-components";
import Modal from '../components/Modal'

export default function Post(props) {
  const [openEditModal, setOpenEditModal] = useState("false")
  const [openRemoveModal, setOpenRemoveModal] = useState("false")
  const [post, setPost] = useState({
    title: "",
    content: "",
  })


  return (
    <Box>
      <HeaderLayout>
        <p>{props.title}</p>
        <div>
          {
            props.canRemove === "true" ? <ion-icon onClick={() => { setOpenRemoveModal("true") }} name="trash-bin-outline"></ion-icon> : <></>
          }
          {
            props.canEdit === "true" ? <ion-icon onClick={() => { setOpenEditModal("true") }} name="create-outline"></ion-icon> : <></>
          }
          <Modal isOpen={openEditModal} title="Edit item">
            <InputWrapper>
              <Label>Title</Label>
              <TitleInput
                onChange={e => setPost({ ...post, title: e.target.value })}
                required
                name="title"
                placeholder="Hello World" />
              <Label>Content</Label>
              <ContentInput
                onChange={e => setPost({ ...post, content: e.target.value })}
                required
                name="content"
                placeholder="Content Here" />
            </InputWrapper>
            <BoxButton>
              <Button>Cancel</Button>
              <Button onClick={() => props.onEdit(props.postId, post)}>Save</Button>
            </BoxButton>
          </Modal>
          <Modal isOpen={openRemoveModal} title="Remove item">
            <BoxButton>
              <Button>Remove</Button>
            </BoxButton>
          </Modal>
        </div>
      </HeaderLayout>
      <Infos>
        <Name>@{props.username}</Name>
        <Date>{props.createdAt}</Date>
      </Infos>
      <Content>{props.content}</Content>
    </Box>
  )
}

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
  background: #FFFFFF;
  border-radius: 8px;
  border: border: 1px solid #000000;
  margin-top: 10px;
  margin-right: 10px;
  color: #000000;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 16px;
`;