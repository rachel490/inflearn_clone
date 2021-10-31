import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoImg } from './logo.svg';

function Logo() {
  return (
    <LogoWrap to='/'>
      <LogoImg />
    </LogoWrap>
  );
}

export default Logo;

const LogoWrap = styled(Link)`
  display: inline-flex;
  align-items: center;
  height: 100%;

  #icon_brand_logo {
    fill: #1dc078;
  }
`;
