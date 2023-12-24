import React from "react";
import styled from "styled-components";
import { Titulo } from "../Titulo";

const CardRecomendacaoContainer = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 600px;
  padding: 1px 20px;
  width: 100%;
  text-align: left;

  img {
    height: 230px;
    width: 150px;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: 0.5s;
    cursor: pointer;
  }

  img:hover {
    transform: scale(1.05);
  }
`;

const CardRecomendacaoItem = styled.div`
  margin: 36px;
  padding: 0 20px;
`;

const Botao = styled.button`
  background-color: #002752;
  border: none;
  color: white;
  border-radius: 8px;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    background-color: #0060a7;
    transform: scale(1.05);
  }
`;

function CardRecomendacao({ titulo, subtitulo, descricao, imagem }) {
  return (
    <CardRecomendacaoContainer>
      <CardRecomendacaoItem>
        <Titulo fonte="24px" alinhar="left">
          {titulo}
        </Titulo>
        <h4>{subtitulo}</h4>
        <p>{descricao}</p>
        <Botao>Saiba mais</Botao>
      </CardRecomendacaoItem>
      <img src={imagem} alt={titulo} />
    </CardRecomendacaoContainer>
  );
}

export default CardRecomendacao;
