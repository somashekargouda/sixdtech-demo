import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [formData, setFormData] = useState({
    receiptNumber: "",
    transId: "",
    amount: "",
    datePaid: "",
    paymentType: "",
    payor: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Payment details submitted succesfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
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
        <form onSubmit={handleSubmit}>
          <CardContainer>
            <h4>Payment Details</h4>
            <RowStyle>
              <InputContainer>
                <Label>Receipt Number</Label>
                <Input
                  type="text"
                  name="receiptNumber"
                  value={formData.receiptNumber}
                  onChange={handleChange}
                  required
                />
              </InputContainer>
              <InputContainer>
                <Label>Transaction ID</Label>
                <Input
                  type="text"
                  name="transId"
                  value={formData.transId}
                  onChange={handleChange}
                  required
                />
              </InputContainer>
            </RowStyle>

            <RowStyle>
              <InputContainer>
                <Label>Amount</Label>
                <Input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                />
              </InputContainer>
              <InputContainer>
                <Label>Date Paid</Label>
                <Date
                  type="date"
                  name="datePaid"
                  value={formData.datePaid}
                  onChange={handleChange}
                  required
                />
              </InputContainer>
            </RowStyle>

            <RowStyle>
              <InputContainer>
                <Label>Payment Type</Label>
                <Dropdown
                  name="paymentType"
                  value={formData.paymentType}
                  onChange={handleChange}
                  required
                >
                  <option name="select">Select</option>
                  <option name="UPI"> UPI</option>
                  <option name="credit-card">Credit Card</option>
                  <option name="Wallets"> Wallets</option>
                  <option name="Netbanking">Netbanking</option>
                </Dropdown>
              </InputContainer>
              <InputContainer>
                <Label>Payor</Label>
                <Input
                  type="text"
                  name="payor"
                  value={formData.payor}
                  onChange={handleChange}
                  required
                />
              </InputContainer>
            </RowStyle>
            <RowStyle>
              <InputContainer>
                <Label>Description</Label>
                <TextArea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="5"
                  cols="33"
                />
              </InputContainer>
            </RowStyle>
            <ButtonContainer>
              <Button type="submit" id="submit">
                Submit
              </Button>
              <Button id="cancel">Cancel</Button>
            </ButtonContainer>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <ToastContainer />
          </CardContainer>
        </form>
      </PageContent>
    </PageContainer>
  );
};

export default PaymentPage;
