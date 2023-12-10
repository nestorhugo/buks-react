import React from "react";
import Header from "./components/Header";
import Pesquisa from "./components/Pesquisa";
import Input from "./components/Input";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right, #f3f3f3 0%, #e6e6e6 100%);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
    </AppContainer>
  );
}

export default App;
