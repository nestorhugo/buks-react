import React from "react";
import perfil from "../../img/perfil.svg";
import sacola from "../../img/sacola.svg";
import styled from "styled-components";

const Icone = styled.li`
  width: 24px;
  display: flex;
  margin-right: 32px;
`;

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

const icones = [perfil, sacola];

function IconesHeader() {
  return (
    <Icones>
      {icones.map((icone, index) => (
        <Icone key={index}>
          <img src={icone} alt="icone" />
        </Icone>
      ))}
    </Icones>
  );
}

export default IconesHeader;
