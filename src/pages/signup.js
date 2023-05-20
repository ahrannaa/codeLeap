import styled from "styled-components"
import { useState } from 'react'
import Modal from '../components/Modal'
import { useDispatch } from "react-redux"
import { signup } from '../redux/userSlice'
import { useNavigate } from "react-router-dom"

export default function SignUpPage() {
  const [username, setUsername] = useState('')
  const dispatcher = useDispatch()
  let navigate = useNavigate();

  function submitForm() {
    dispatcher(signup(username))
    navigate('/')
  }

  return (
    <Modal isOpen="true" title="Welcome to CodeLeap network!">
      <Form onSubmit={submitForm}>
        <InputLabel>Please enter your username</InputLabel>
        <InputName type="text" value={username}
          onChange={e => setUsername(e.target.value)}
          required
          name="username"
          placeholder="John doe" />
        <Box>
          <ModalButton type="submit">ENTER</ModalButton>
        </Box>
      </Form>
    </Modal>
  )
}

const Form = styled.form`
 display: flex;
 flex-direction: column;
`;

const InputName = styled.input`
  width: 452px;
  height: 32px;
  border: 1px solid #777777;
  border-radius: 8px;
  color: black;

  &::placeholder {
    font-size: 14px;
    color: #CCCCCC;
    padding: 10px;
  }
`
const Box = styled.div`
 display: flex;
 justify-content:end;
`
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
  &:hover {
    background-color: blue;
    cursor:pointer;
  }
`
const InputLabel = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: #000000;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
  display: flex;
`