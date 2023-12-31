import React from "react";
import logo from "../../img/logo.svg";
import styled from "styled-components";

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
      <LogoImg src={logo} alt="logo" className="logo-img" />
      <p>
        <strong>bu</strong>ks
      </p>
    </LogoContainer>
  );
}

export default Logo;
