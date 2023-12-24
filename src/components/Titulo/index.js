import styled from "styled-components";

export const Titulo = styled.h1`
  font-size: ${(props) => props.fonte || "2rem"};
  text-align: ${(props) => props.alinhar || "center"};
  color: ${(props) => props.cor || "#000"};
`;
