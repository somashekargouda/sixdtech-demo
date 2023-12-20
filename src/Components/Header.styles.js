import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #343a40;
  color: white;
  padding: 8px;
  text-align: center;
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 8px;
`;

export const LogoText = styled.div`
  color: white;
  font-size: large;
`;

export const MiddleSection = styled.div`
  display: flex;
  align-items: center;
`;

export const SelectedButton = styled.button`
  background-color: ${(props) => (props.selected ? "#484e53" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "#484e53")};
  font-size: medium;
  border: ${(props) => (props.selected ? "2px solid #484e53" : "none")};
  border-radius: 20px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  margin-right: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border 0.3s;
`;
export const MiddleLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MiddleLogo = styled.img`
  width: 30px;
  margin-right: 8px;
`;

export const MiddleLogoText = styled.div`
  color: ${(props) => (props.selected ? "#484e53" : "white")};
  font-size: medium;
`;

export const DownwardArrow = styled.span`
  color: white;
  font-size: 12px;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const Icon = styled.img`
  width: 20px;
  margin-right: 16px;
  cursor: pointer;
`;

export const UserNameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.div`
  color: white;
  font-size: medium;
  margin-right: 8px;
`;
