import React from "react";
import styled from "styled-components";

function Alert({ text }) {
  return (
    <Container>
      <AlertText>{text}</AlertText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AlertText = styled.div`
  text-align: center;
  font-size: 15px;
  color: #005588;
  margin-bottom: 25px;
`;

export default Alert;
