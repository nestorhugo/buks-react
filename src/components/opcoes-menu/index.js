import React from "react";
import "./style.css";
import styled from "styled-components";

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

const textoOpcoes = ["Categorias", "Favoritos", "Minha Estante"];

function OpcoesMenu() {
  return (
    <OpcoesMenuContainer>
      {textoOpcoes.map((texto) => (
        <OpcoesMenuItem>{texto}</OpcoesMenuItem>
      ))}
    </OpcoesMenuContainer>
  );
}

export default OpcoesMenu;
