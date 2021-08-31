import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { showModal } from "store/actions/modal";
import useForm from "hook/useForm";

import { login } from "./utils/user";
import { saveToken } from "./utils/auth";

import LoginForm from "./templates/Form";
import Signup from "./Signup";
import ModalAlert from "Components/Modal/Alert";

function Login(props) {
  const dispatch = useDispatch();
  const { formState, onChange } = useForm();

  const onSignup = () => {
    dispatch(showModal("회원가입", <Signup />));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userInfo = login(formState);

    if (!userInfo) {
      dispatch(
        showModal(
          "로그인 실패",
          <ModalAlert
            text={"올바르지 않은 아이디 혹은 패스워드입니다."}
            closeButton={false}
          />
        )
      );

      return;
    }

    saveToken(userInfo.token);

    dispatch(
      showModal(
        "로그인",
        <ModalAlert
          text={`로그인되었습니다. ${userInfo.userName}님`}
          closeButton={false}
        />
      )
    );
  };

  return (
    <div>
      <LoginForm onSubmit={onSubmit}>
        <input name="id" placeholder="아이디" onChange={onChange} />

        <input
          name="password"
          placeholder="패스워드"
          type="password"
          onChange={onChange}
        />

        <input type="submit" value="로그인" />
      </LoginForm>

      <SignupAlert>
        <span onClick={onSignup}>아직 회원이 아니신가요?</span>
      </SignupAlert>
    </div>
  );
}

const SignupAlert = styled.div`
  color: #505050;
  font-size: 15px;
  text-align: center;
  span {
    cursor: pointer;
  }
`;

export default Login;
