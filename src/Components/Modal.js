import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { closeModal } from "store/actions/modal";

const CLOSEABLE_CLASSNAME = "close";

function Modal({ children, title }) {
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

        {children}

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
  padding: 20px 30px;
  animation: padeIn 0.2s cubic-bezier(0, 0, 0, 0.7),
    slideUp 0.2s cubic-bezier(0, 0, 0, 0.7);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: normal;
  border-bottom: 2px solid #eee;
  padding-bottom: 15px;
  margin-bottom: 25px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 18px;
  background: none;
  border: 0;
  font-size: 16px;
  cursor: pointer;
`;

export default Modal;
