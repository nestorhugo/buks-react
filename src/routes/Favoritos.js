import React from "react";
import Pesquisa from "../components/Pesquisa";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #f3f3f3 0%, #e6e6e6 100%);
`;

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  );
}

export default Favoritos;
