import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { showModal } from "store/actions/modal";
import { useSelector } from "react-redux";
import Login from "Components/Login";

function Main(props) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onLoginClick = () => {
    dispatch(showModal("로그인", <Login />));
  };

  return (
    <Container>
      <Button onClick={onLoginClick}>로그인</Button>
      {auth.check && <div>환영합니다 {auth.user.name}님!</div>}
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
  width: 120px;
  height: 50px;
  border: none;
  background: #a9cfef;
  cursor: pointer;
  border-radius: 8px;
  outline: none;
  font-weight: bold;

  &:active {
    transform: scale(0.96);
  }
`;

export default Main;
