import React from 'react';
import {FooterContainer, LeftSection, CompanyText, RightSection, FooterLink} from "./Footer.styles" 

const Footer = () => {
  return (
    <FooterContainer>
      <LeftSection>
        <CompanyText>@2023 Company</CompanyText>
      </LeftSection>
      <RightSection>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Terms of Use</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </RightSection>
    </FooterContainer>
  );
};

export default Footer;
