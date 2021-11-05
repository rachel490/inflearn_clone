import React from 'react';
import styled from 'styled-components';

const DashboardHeader = ({ title }) => {
  return (
    <Wrap>
      <Header>
        <Title>{title}</Title>
      </Header>
    </Wrap>
  );
};

export default DashboardHeader;

const Wrap = styled.div`
  background-color: #333b3d;
  padding: 1rem;
  color: #fff;
`;

const Header = styled.div`
  max-width: 1180px;
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
`;

const Title = styled.h4`
  font-size: 1.5rem;
  font-weight: 400;
`;
