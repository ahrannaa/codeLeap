import styled from "styled-components";

export default function Header() {
  return (
    <HeaderLayout><p>CodeLeap Network</p></HeaderLayout>
  )
};

const HeaderLayout = styled.div`
  width:100%;
  height:80px;
  position: fixed;
  top: 0;
  left: 0;
  background: #7695EC;
  border-bottom: 1px solid #999999
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  color: #FFFFFF;

  p {
   margin-left:20px;
  }
`;
