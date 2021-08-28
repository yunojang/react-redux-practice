import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 300px;

  input {
    border-radius: 5px;
    border: 1px solid #aaa;
    padding: 10px 8px;
    outline: none;
    color: #6699bb;
  }
  input + input {
    margin-top: 10px;
  }
  input:focus {
    border: 1px solid #6699bb;
  }

  input[type="submit"] {
    border: 0;
    background: #aae0ff;
    border-radius: 5px;
    color: #000;
    font-weight: bold;
  }
`;

export default Form;
