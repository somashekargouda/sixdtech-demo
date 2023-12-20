import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const PageContent = styled.div`
  display: flex;
  width: 100%;
`;
export const CardContainer = styled.div`
  background-color: white;
  padding: 16px;
  margin: 32px;
  max-height: 460px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 540px;
`;

export const Label = styled.label`
  color: #333;
  margin-bottom: 8px !important;
`;

export const Input = styled.input`
  padding: 10px 10px 1px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 230px

  &:focus {
    border-color: #007bff; 
  }
`;

export const RowStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;
export const InputContainer = styled.div`
  flex: 5;
  margin-right: 12px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 465px;
  &:focus {
    border-color: #007bff;
  }
`;

export const Dropdown = styled.select`
  padding: 10px 10px 1px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 220px;

  &:focus {
    border-color: #007bff;
  }
`;

export const Date = styled.input`
  padding: 10px 10px 1px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 200px;

  &:focus {
    border-color: #007bff;
  }
`;

export const ButtonContainer = styled.div`
  flex: 5;
  margin-right: 12px;
`;

export const Button = styled.button`
  margin: 10px 15px 10px 3px;
  border-radius: 18px;
  background-color: ${(props) =>
    props.id === "submit" ? "#94d3a2" : "#6c757d"};
  color: white;
  cursor: pointer;
  height: 35px;
  width: 80px;
  border-color: transparent;
`;

export const SideContent = styled.div`
  width: 390px;
  padding: 30px;
`;

export const Icon = styled.img`
  width: 20px;
  margin-right: 16px;
  cursor: pointer;
`;

export const SideHeading = styled.h1`
  font-size: 30px;
`;
export const SideName = styled.h5`
  font-size: 13px;
`;
export const SideDiv = styled.div`
  display: flex;
`;
