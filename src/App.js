import React from "react";
import Header from "./components/Header";
import Pesquisa from "./components/Pesquisa";
import UltimosLancamentos from "./components/UltimosLancamentos";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #f3f3f3 0%, #e6e6e6 100%);
`;

function App() {
  return (
    <AppContainer>
      <div>
        <Header />
      </div>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
