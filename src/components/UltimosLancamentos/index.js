import React from "react";
import styled from "styled-components";
import CardRecomendacao from "../cardRecomendacao";
import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from "../Titulo";

const UltimosLancamentosContainer = styled.section`
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
`;

const UltimosLancamentosItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 32px;

  div {
    position: relative;
    margin: 8px;
    cursor: pointer;

    &:hover p {
      opacity: 1;
    }
  }

  img {
    height: 230px;
    width: 150px;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: 0.5s;
  }

  img:hover {
    transform: scale(1.05);
    filter: brightness(0.5);
  }

  p {
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.5s;
    color: #fff;
  }
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#000" fonte="24px">
        Últimos Lançamentos
      </Titulo>
      <UltimosLancamentosItem>
        {livros.map((livro) => (
          <div key={livro.nome}>
            <img src={livro.src} alt={livro.nome} />
            <p>{livro.nome}</p>
          </div>
        ))}
      </UltimosLancamentosItem>
      <CardRecomendacao
        titulo="Você talvez se interesse..."
        subtitulo="React: Aprenda Praticando"
        descricao="Desenvolva aplicações web reais com uso da biblioteca React e seus módulos auxiliares"
        imagem="https://m.media-amazon.com/images/I/61FPdlI0U2L._AC_UF1000,1000_QL80_.jpg"
      ></CardRecomendacao>
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
