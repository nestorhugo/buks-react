import React from "react";
import "./style.css";
import Logo from "../../components/Logo";
import OpcoesMenu from "../../components/opcoes-menu";
import IconesHeader from "../../components/icones-header";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #e9e9e9;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgb(48, 48, 48);
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesMenu />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;
