import React from "react";
import styled from "styled-components";
import CartContent from "../components/CartContent";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";
import Footer from "../components/shared/Footer/Footer";
import LoginedHeader from "../components/shared/Header/LoginedHeader";

const CartPage = () => {
  return (
    <div>
      <LoginedHeader/>
      <Wrap>
        <DashboardHeader title="위시리스트" />
      </Wrap>
      <Container>
        <DashboardSidebar />
        <CartContent />
      </Container>
      <Footer />
    </div>
  );
};

export default CartPage;

const Wrap = styled.div`
  padding-top: 65px;
`;

const Container = styled.div`
  max-width: 1180px;
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
  display: flex;
`;
