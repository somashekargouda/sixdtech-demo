import React from "react";
import grave from "../Utils/grave.png";
import person from "../Utils/person.png";
import coffin from "../Utils/burried.png";
import {
  PageContainer,
  PageContent,
  CardContainer,
  Label,
  Input,
  RowStyle,
  InputContainer,
  TextArea,
  Dropdown,
  ButtonContainer,
  Button,
  SideContent,
  Icon,
  Date,
  SideHeading,
  SideName,
  SideDiv,
} from "./PaymentPage.styles";
const PaymentPage = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <PageContainer>
      <PageContent>
        <SideContent>
          <SideHeading>Create Payment</SideHeading>
          <SideName>Grave Site</SideName>
          <SideDiv>
            <Icon src={grave} />
            01-1001-05.0
          </SideDiv>
          <SideName>Owner</SideName>
          <SideDiv>
            <Icon src={person} />
            Lorraine & Russ Stewart
          </SideDiv>
          <SideName>Person Buried</SideName>
          <SideDiv>
            <Icon src={coffin} />
            Edgar Steward
          </SideDiv>
        </SideContent>
        <CardContainer>
          <h4>Payment Details</h4>
          <RowStyle>
            <InputContainer>
              <Label>Receipt Number</Label>
              <Input type="text" />
            </InputContainer>
            <InputContainer>
              <Label>Transaction ID</Label>
              <Input type="text" />
            </InputContainer>
          </RowStyle>

          <RowStyle>
            <InputContainer>
              <Label>Amount</Label>
              <Input type="text" />
            </InputContainer>
            <InputContainer>
              <Label>Date Paid</Label>
              <Date type="date" />
            </InputContainer>
          </RowStyle>

          <RowStyle>
            <InputContainer>
              <Label>Payment Type</Label>
              <Dropdown onChange={handleChange}>
                <option name="select"> Select</option>
                <option name="UPI"> UPI</option>
                <option name="credit-card">Credit Card</option>
                <option name="Wallets"> Wallets</option>
                <option name="Netbanking">Netbanking</option>
              </Dropdown>
            </InputContainer>
            <InputContainer>
              <Label>Payor</Label>
              <Input type="text" />
            </InputContainer>
          </RowStyle>
          <RowStyle>
            <InputContainer>
              <Label>Description</Label>
              <TextArea rows="5" cols="33" />
            </InputContainer>
          </RowStyle>
          <ButtonContainer>
            <Button id="submit">Submit</Button>
            <Button id="cancel">Cancel</Button>
          </ButtonContainer>
        </CardContainer>
      </PageContent>
    </PageContainer>
  );
};

export default PaymentPage;
