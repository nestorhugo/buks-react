import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const OpcoesMenuContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

const OpcoesMenuItem = styled.li`
  margin-left: 10px;
  margin-right: 10px;
  color: rgb(48, 48, 48);
  min-width: 120px;
  font-size: 16px;
`;

const textoOpcoes = ["Categorias", "Favoritos", "Estante"];

function OpcoesMenu() {
  return (
    <OpcoesMenuContainer>
      {textoOpcoes.map((texto) => (
        <Link key={texto} to={`/${texto.toLowerCase()}`}>
          <OpcoesMenuItem>{texto}</OpcoesMenuItem>
        </Link>
      ))}
    </OpcoesMenuContainer>
  );
}

export default OpcoesMenu;
