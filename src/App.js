import React from "react";
import "./App.css";
import Logo from "./components/Logo";
import perfil from "./img/perfil.svg";
import sacola from "./img/sacola.svg";

const textoOpcoes = ["Categorias", "Favoritos", "Minha Estante"];
const icones = [perfil, sacola];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <ul className="opcoes-menu">
          {textoOpcoes.map((texto) => (
            <li className="opcoes-menu-item">{texto}</li>
          ))}
        </ul>

        <ul className="icones"></ul>
        {icones.map((icone) => (
          <li className="icones-item">
            <img
              src={icone}
              className="icone"
              alt="icone"
              style={{ fill: "white" }}
            />
          </li>
        ))}
      </header>
    </div>
  );
}

export default App;
