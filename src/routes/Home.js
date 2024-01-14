import React from "react";
import Pesquisa from "../components/Pesquisa";
import UltimosLancamentos from "../components/UltimosLancamentos";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home;
