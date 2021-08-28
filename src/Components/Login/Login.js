import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { showModal } from "store/actions/modal";
import LoginForm from "./templates/Form";

import Signup from "./Signup";

function Login(props) {
  const dispatch = useDispatch();

  const onSignup = () => {
    dispatch(showModal("회원가입", <Signup />));
  };

  return (
    <div>
      <LoginForm>
        <input placeholder="아이디" />
        <input placeholder="패스워드" type="password" />
        <input type="submit" value="로그인" />
      </LoginForm>

      <SignupButton onClick={onSignup}>아직 회원이 아니신가요?</SignupButton>
    </div>
  );
}

const SignupButton = styled.div`
  color: #505050;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
`;

export default Login;
