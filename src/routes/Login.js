import React from "react";
import styled from "styled-components";
import { Titulo } from "../components/Titulo";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function Login() {
  return (
    <AppContainer>
      <Titulo>Login</Titulo>
    </AppContainer>
  );
}

export default Login;
