import React from "react";
import styled from "styled-components";

const CommunityHeader = ({ title, subtitle }) => {
  return (
    <Wrap>
      <Header>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Header>
    </Wrap>
  );
};

export default CommunityHeader;

const Wrap = styled.section`
  padding: 24px 0;
  width: 100%;
  background-color: #333b3d;
`;

const Header = styled.div`
  margin: 0 auto;
  max-width: 1160px;
`;

const Title = styled.h2`
  height: 20px;
  font-size: 24px;
  font-weight: 700;
  line-height: 0.71;
  color: #fff;
`;

const SubTitle = styled.p`
  margin-top: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: #fff;
`;
