import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { showModal } from "store/actions/modal";
import { useSelector } from "react-redux";

function Main(props) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onLoginClick = () => {
    dispatch(showModal("Login"));
  };

  return (
    <Container>
      <Button onClick={onLoginClick}>로그인</Button>
      {auth.auth && <div>환영합니다 {auth.user.name}님!</div>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid #000;
  background: #aae0ff;
  cursor: pointer;
  border-radius: 8px;
  outline: none;

  &:active {
    transform: scale(0.95);
  }
`;

export default Main;
