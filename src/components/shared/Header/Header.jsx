import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import { StLink } from "../style/style";
import {
  HeaderWrap,
  HeaderContainer,
  LogoWrap,
  NavWrap,
  Box,
  HeaderButton,
  Buttons,
  ButtonWrap,
  LinkWrap,
} from "./Header.style";
import SearchBar from "./SearchBar";
import SignInModal from "../Modal/SignInModal";

function Header() {
  const [signInModal, setSignInModal] = useState();

  const toggleSignInModal = (e) => {
    console.log(e);
    setSignInModal(!signInModal);
  };

  return (
    <>
      {signInModal && <SignInModal toggleSignInModal={toggleSignInModal} />}
      <HeaderWrap>
        <HeaderContainer>
          <LogoWrap>
            <Logo />
          </LogoWrap>
          <NavWrap>
            <Box>
              <Nav />
            </Box>
            <Box>
              <SearchBar />
              <Buttons>
                <LinkWrap>
                  <StLink>지식공유참여</StLink>
                </LinkWrap>
                <ButtonWrap>
                  <HeaderButton onClick={toggleSignInModal}>로그인</HeaderButton>
                </ButtonWrap>
                <ButtonWrap>
                  <HeaderButton to="/signup" bgColor="#ff7867" fontColor="#fff">
                    회원가입
                  </HeaderButton>
                </ButtonWrap>
              </Buttons>
            </Box>
          </NavWrap>
        </HeaderContainer>
      </HeaderWrap>
    </>
  );
}

export default Header;
