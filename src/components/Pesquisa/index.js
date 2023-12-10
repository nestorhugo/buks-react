import React from "react";
import Input from "../Input";
import styled from "styled-components";

const PesquisaContainer = styled.section`
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Titulo = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
`;

function Pesquisa() {
  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
      <Input placeholder="Pesquisar" />
    </PesquisaContainer>
  );
}

export default Pesquisa;
