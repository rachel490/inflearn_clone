import React, {useState} from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import { StLink } from '../style/style';
import {
  HeaderWrap,
  HeaderContainer,
  HeaderButton,
  ButtonWrap,
  LinkWrap,
} from './Header.style';
import SearchBar from './SearchBar';
import SignInModal from '../Modal/SignInModal';

function Header() {
  const [signInModalOn, setSignInModalOn] = useState(false);

  return (
    <>
      <SignInModal show={signInModalOn} onHide={() => setSignInModalOn(false)}/>
      <HeaderWrap>
        <HeaderContainer>
          <Logo />
          <Nav />
          <SearchBar />
          <LinkWrap>
            <StLink>지식공유참여</StLink>
          </LinkWrap>
          <ButtonWrap>
            <HeaderButton onClick={() => setSignInModalOn(true)}>로그인</HeaderButton>
          </ButtonWrap>
          <ButtonWrap>
            <HeaderButton bgColor='#ff7867' fontColor='#fff'>
              회원가입
            </HeaderButton>
          </ButtonWrap>
        </HeaderContainer>
      </HeaderWrap>
    </>
  );
}

export default Header;
