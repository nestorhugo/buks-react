import React from "react";
import "./style.css";
import Logo from "../../components/Logo";
import OpcoesMenu from "../../components/opcoes-menu";
import IconesHeader from "../../components/icones-header";

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <OpcoesMenu />
      <IconesHeader />
    </header>
  );
}

export default Header;
