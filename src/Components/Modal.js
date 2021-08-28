import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { closeModal } from "store/actions/modal";

const CLOSEABLE_CLASSNAME = "close";

function Modal({ title }) {
  const dispatch = useDispatch();

  const onClose = (e) => {
    if (!e.target.classList.contains(CLOSEABLE_CLASSNAME)) {
      return;
    }

    dispatch(closeModal());
  };

  return (
    <Dim onClick={onClose} className={CLOSEABLE_CLASSNAME}>
      <ModalContainer>
        <Title>{title}</Title>
        <Form>
          <input placeholder="아이디" />
          <input placeholder="패스워드" type="password" />
          <input type="submit" value="로그인" />
        </Form>

        <SignupButton>회원이 아니신가요?</SignupButton>

        <CloseButton onClick={onClose} className={CLOSEABLE_CLASSNAME}>
          ❌
        </CloseButton>
      </ModalContainer>
    </Dim>
  );
}

const Dim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContainer = styled.div`
  position: relative;
  background: #fff;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: normal;
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;
  margin-bottom: 15px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 300px;

  input {
    padding: 10px 8px;
  }
  input + input {
    margin-top: 10px;
  }
`;

const SignupButton = styled.div`
  text-align: center;
  cursor: pointer;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 15px;
  background: none;
  border: 0;
  font-size: 20px;
  cursor: pointer;
`;

export default Modal;
