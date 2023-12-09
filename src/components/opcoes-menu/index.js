import React from "react";
import "./style.css";

const textoOpcoes = ["Categorias", "Favoritos", "Minha Estante"];

function OpcoesMenu() {
  return (
    <ul className="opcoes-menu">
      {textoOpcoes.map((texto) => (
        <li className="opcoes-menu-item">{texto}</li>
      ))}
    </ul>
  );
}

export default OpcoesMenu;
