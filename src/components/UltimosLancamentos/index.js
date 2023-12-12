import React from "react";
import styled from "styled-components";
import { livros } from "./dadosUltimosLancamentos";

const UltimosLancamentosContainer = styled.section`
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
`;

const UltimosLancamentosItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

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
      <h1>Últimos Lancamentos</h1>
      <UltimosLancamentosItem>
        {livros.map((livro) => (
          <div>
            <img src={livro.src} alt={livro.nome} />
            <p>{livro.nome}</p>
          </div>
        ))}
      </UltimosLancamentosItem>
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
