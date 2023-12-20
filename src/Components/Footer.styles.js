import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #6c757d;
  color: #333;
  padding: 8px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  height: 8%;
  width: 100%;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const CompanyText = styled.div`
  color: white;
  font-size: medium;
  margin-right: 16px;
`;

export const RightSection = styled.div`
  display: flex;
`;

export const FooterLink = styled.a`
  color: white;
  font-size: medium;
  margin-right: 16px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
