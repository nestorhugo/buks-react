import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

const FooterContainer = styled.footer`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin-top: 80px;
  background-color: #e9e9e9;
`;

const LogoContainer = styled.div`
  /* styles for the logo container */
`;

const SocialLinksContainer = styled.div`
  /* styles for the social links container */
`;

const MadeWithLoveContainer = styled.div`
  /* styles for the made with love text container */
`;

function Footer() {
  return (
    <FooterContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <SocialLinksContainer>
        {/* Insert your social links here */}
      </SocialLinksContainer>
      <MadeWithLoveContainer>
        Made with love by{" "}
        <a
          href="https://github.com/nestorhugo/buks-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          nestorhugo
        </a>
      </MadeWithLoveContainer>
    </FooterContainer>
  );
}

export default Footer;
