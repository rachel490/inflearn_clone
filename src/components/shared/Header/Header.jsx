import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import {
  HeaderWrap,
  HeaderContainer,
  HeaderButton

} from './Header.style';

function Header() {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <Logo />
        <Nav />
        <HeaderButton>로그인</HeaderButton>
        <HeaderButton bgColor="#ff7867">회원가입</HeaderButton>
      </HeaderContainer>
    </HeaderWrap>
  );
}

export default Header;
