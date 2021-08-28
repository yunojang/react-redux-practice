import React from "react";
import styled from "styled-components";
import LoginForm from "./templates/Form";

function Signup(props) {
  return (
    <div>
      <LoginForm>
        <input placeholder="아이디" />
        <input placeholder="사용 이름" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호 확인" />
        <input type="submit" value="회원가입" />
      </LoginForm>

      <Alert>간단하게 가입하고 이용하세요</Alert>
    </div>
  );
}

const Alert = styled.div`
  text-align: center;
  color: #505050;
  font-size: 14px;
`;

export default Signup;
