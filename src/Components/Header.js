import React from "react";
import {
  HeaderContainer,
  LeftSection,
  Logo,
  LogoText,
  MiddleSection,
  SelectedButton,
  MiddleLogoContainer,
  MiddleLogoText,
  RightSection,
  Icon,
  UserNameContainer,
  UserName,
} from "./Header.styles";
import logo from "../Utils/logo.png";
import maintain from "../Utils/four-squares.png";
import arrow from "../Utils/down-arrow.png";
import payments from "../Utils/dollar.png";
import report from "../Utils/reports.png";
import search from "../Utils/search.png";
import settings from "../Utils/settings.png";
import help from "../Utils/help.png";
import name from "../Utils/circle-name.png";

const Header = () => {
  return (
    <HeaderContainer>
      <LeftSection>
        <Logo src={logo} alt="Logo" />
        <LogoText>Grave Sites Management</LogoText>
      </LeftSection>
      <MiddleSection>
        <MiddleLogoContainer>
          <SelectedButton selected>
            <Icon src={maintain} />

            <MiddleLogoText>
              Maintain <Icon src={arrow} />
            </MiddleLogoText>
          </SelectedButton>
        </MiddleLogoContainer>
        <MiddleLogoContainer>
          <SelectedButton>
            <Icon src={payments} />
            <MiddleLogoText>Payments</MiddleLogoText>
          </SelectedButton>
        </MiddleLogoContainer>
        <MiddleLogoContainer>
          <SelectedButton>
            <Icon src={report} />
            <MiddleLogoText>Reports</MiddleLogoText>
          </SelectedButton>
        </MiddleLogoContainer>
      </MiddleSection>
      <RightSection>
        <Icon src={search} />
        <Icon src={settings} />
        <Icon src={help} />
        <Icon src={name} />
        <UserNameContainer>
          <UserName>Pavan</UserName>

          <Icon src={arrow} />
        </UserNameContainer>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
