import { useState } from "react";
import styled from "styled-components";
import Modal from '../components/Modal'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default function Post(props) {
  const [openEditModal, setOpenEditModal] = useState("false")
  const [openRemoveModal, setOpenRemoveModal] = useState("false")
  const [post, setPost] = useState({
    title: props.title,
    content: props.content,
  })

  function formatDate(createdAt) {
    return dayjs(createdAt).fromNow()
  }

  function isNotBlank(value) {
    return value.trim() !== ""
  }
  async function submitEdit(e) {
    e.preventDefault()
    if (isNotBlank(post.title) && isNotBlank(post.content)) {
      try {
        await props.onEdit(props.postId, post)
        setOpenEditModal("false")
      } catch (error) {
        throw error
      }
    }
  }
  async function deletePost() {
    try {
      await props.onDelete(props.postId)
      setOpenRemoveModal("false")
    } catch (error) {
      throw error
    }
  }
  return (
    <Box>
      <HeaderLayout>
        <p>{props.title}</p>
        <div>
          {
            props.canDelete === "true" ? <ion-icon onClick={() => { setOpenRemoveModal("true") }} name="trash-bin-outline"></ion-icon> : <></>
          }
          {
            props.canEdit === "true" ? <ion-icon onClick={() => { setOpenEditModal("true") }} name="create-outline"></ion-icon> : <></>
          }
          <Modal isOpen={openEditModal} title="Edit item">
            <Form onSubmit={submitEdit}>
              <InputWrapper>
                <Label>Title</Label>
                <TitleInput
                  value={post.title}
                  onChange={e => setPost({ ...post, title: e.target.value })}
                  required
                  name="title"
                  placeholder="Hello World" />
                <Label>Content</Label>
                <ContentInput
                  value={post.content}
                  onChange={e => setPost({ ...post, content: e.target.value })}
                  required
                  name="content"
                  placeholder="Content Here" />
              </InputWrapper>
              <BoxButton>
                <ButtonRed onClick={() => { setOpenEditModal("false") }}>Cancel</ButtonRed>
                <ButtonGreen type="submit">Save</ButtonGreen>
              </BoxButton>
            </Form>
          </Modal>
          <Modal isOpen={openRemoveModal} title="Are you sure you want to delete this item? ">
            <BoxButton>
              <ButtonGreen onClick={() => { setOpenRemoveModal("false") }}>Cancel</ButtonGreen>
              <ButtonRed onClick={deletePost}>Delete</ButtonRed>
            </BoxButton>
          </Modal>
        </div>
      </HeaderLayout>
      <Infos>
        <Name>@{props.username}</Name>
        <Date>{formatDate(props.createdAt)}</Date>
      </Infos>
      <Content>{props.content}</Content>
    </Box>
  )
}

const Form = styled.form`
 display: flex;
 flex-direction: column;
`;

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
`
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
`
const Infos = styled.div`
 display: flex;
 justify-content: space-between;
`
const Paragraph = styled.p`
 font-family: 'Roboto';
 font-size: 18px;
 font-style: normal;
 color: #777777;
`
const Name = styled(Paragraph)`
  margin-left:10px;
  font-weight: 700;
`
const Date = styled(Paragraph)`
  margin-right:10px;
  font-weight: 400;
`
const Content = styled.p`
 font-family: 'Roboto';
 font-style: normal;
 font-weight: 400;
 font-size: 18px;
 line-height: 21px;
 margin-left:10px;
 margin-right:10px;
`
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`
const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`
const Input = styled.input`
  background: #FFFFFF;
  border: 1px solid #777777;
  border-radius: 8px; 
  margin-left: auto;
  margin-right: auto;
`
const TitleInput = styled(Input)`
  width: 612px;
  height: 32px;
`
const ContentInput = styled(Input)`
 width: 612px;
 height: 74px;
`
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
`
const ButtonRed = styled(Button)`
 &:hover {
  color:#FFFFFF;
  background:#FF5151;
  border: none;
  cursor: pointer;
  transform: scale(1.1)
 }
`
const ButtonGreen = styled(Button)`
 &:hover {
  color:#FFFFFF;
  background:#47B960;
  border: none;
  cursor: pointer;
  transform: scale(1.1)
 }
`
