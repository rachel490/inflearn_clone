import React from "react";
import styled from "styled-components";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";
import MainDashboard from "../components/Dashboard/MainDashboard";
import Footer from "../components/shared/Footer/Footer";
import LoginedHeader from "../components/shared/Header/LoginedHeader";

const DashboardPage = () => {
  return (
    <div>
      <LoginedHeader />
      <DashboardHeader />
      <Wrap>
        <MainContainer>
          <DashboardSidebar />
          <MainDashboard />
        </MainContainer>
      </Wrap>
      <Footer />
    </div>
  );
};

export default DashboardPage;

const Wrap = styled.div`
  background-color:#f7f7f7;


`

const MainContainer = styled.div`
  max-width: 1180px;
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
  display: flex;
  padding-top: 65px;
`;
