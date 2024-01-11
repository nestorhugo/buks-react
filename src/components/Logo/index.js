import React from "react";
import logo from "../../img/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImg = styled.img`
  margin-right: 10px;
  width: 48px;
`;

function Logo() {
  return (
    <LogoContainer>
      <Link to="/">
        <LogoImg src={logo} alt="logo" className="logo-img" />
      </Link>
    </LogoContainer>
  );
}

export default Logo;
