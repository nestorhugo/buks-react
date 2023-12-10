import styled from "styled-components";

const Input = styled.input`
  backgroud: transparent;
  border: 1px solid #fff;
  padding: 12px 12px 12px 12px;
  width: 250px;
  font-size: 16px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  focus {
    outline: none;
    border-color: #f00;
  }

  &::placeholder {
    font-size: 16px;
  }
`;

export default Input;
