import useForm from "hook/useForm";
import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { addUser } from "./utils/user";
import { showModal } from "store/actions/modal";
import LoginForm from "./templates/Form";
import ModalAlert from "Components/Modal/Alert";

function Signup(props) {
  const dispatch = useDispatch();
  const { formState, onChange } = useForm();

  const onSubmit = (e) => {
    e.preventDefault();

    addUser(formState);
    dispatch(
      showModal(
        "회원가입 완료",
        <ModalAlert
          text="가입이 완료되었습니다. 로그인하여 이용하세요"
          closeButton={false}
        />
      )
    );
  };

  return (
    <div>
      <LoginForm onSubmit={onSubmit}>
        <input name="username" placeholder="사용 이름" onChange={onChange} />

        <input name="id" placeholder="아이디" onChange={onChange} />

        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={onChange}
        />

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
