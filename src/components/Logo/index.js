import React from "react";
import logo from "../../img/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImg = styled.img`
  margin-right: 10px;
  width: 120px;
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
