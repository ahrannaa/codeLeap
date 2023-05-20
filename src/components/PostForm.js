import styled from "styled-components"
import { useState } from "react"

export default function PostForm({ onSubmit }) {
  const [post, setPost] = useState({ title: "", content: "" })

  function handlePost(e) {
    const { name, value } = e.target
    setPost({ ...post, [name]: value })
  }

  function submitForm(e) {
    e.preventDefault()
    onSubmit(post)
    setPost({ title: "", content: "" })
  }

  return (
    <Box>
      <Form onSubmit={submitForm}>
        <Title>What’s on your mind?</Title>
        <InputWrapper>
          <Label>Title</Label>
          <TitleInput
            required
            name="title"
            value={post.title}
            onChange={handlePost}
            placeholder="Hello World" />
          <Label>Content</Label>
          <ContentInput required
            name="content"
            value={post.content}
            onChange={handlePost}
            placeholder="Content Here" />
        </InputWrapper>
        <Button type="submit">Create</Button>
      </Form>
    </Box>
  );
};

const Box = styled.div`
 width: 752px;
 height: 334px;
 margin-top: 100px;
 margin-left: auto;
 margin-right: auto;
 background: #FFFFFF;
 border: 1px solid #999999;
 border-radius: 16px;
 box-sizing: border-box;
`;
const Form = styled.form`
 display: flex;
 flex-direction: column;
`;
const Title = styled.h2`
 font-family: 'Roboto', sans-serif;
 font-style: normal;
 font-weight: 700;
 font-size: 22px;
 color: #000000;
 margin-left: 20px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:10px;
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
  &::placeholder {
    font-size:14px;
    padding:10px;
  }
`;
const TitleInput = styled(Input)`
  width: 704px;
  height: 32px;
`;
const ContentInput = styled(Input)`
 width: 704px;
 height: 74px;
`;
const Button = styled.button`
  width: 120px;
  height: 32px;
  background: #7695EC;
  border-radius: 8px;
  border: none;
  margin-top: 10px;
  margin-left: auto;
  margin-right: 18px;
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 16px;
  
  &:hover {
    background-color: blue;
    cursor: pointer;
    transform: scale(1.1)
  }
`;