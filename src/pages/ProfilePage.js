import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import DashboardSidebar from '../components/Dashboard/DashboardSidebar';
import Footer from '../components/shared/Footer/Footer';
import ProfileContent from '../components/Profile/ProfileContent';
import LoginedHeader from '../components/shared/Header/LoginedHeader';

const ProfilePage = () => {
  return (
    <div>
      <LoginedHeader />
      <Wrap>
        <DashboardHeader title='프로필' />
        <Container>
          <DashboardSidebar />
          <ProfileContent />
        </Container>
      </Wrap>
      <Footer />
    </div>
  );
};

export default ProfilePage;

const Wrap = styled.div`
  padding-top: 65px;

`

const Container = styled.div`
  max-width: 1180px;
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
  display: flex;

`;
