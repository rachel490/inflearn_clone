import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StLink } from "../style/style";
import SearchBar from "./SearchBar";
import SignInModal from "../Modal/SignInModal";

function Header() {
  const [signInModal, setSignInModal] = useState(false);

  const toggleSignInModal = (e) => {
    console.log('hi',signInModal);
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
                  <LoginButton onClick={toggleSignInModal} >로그인</LoginButton>
                </ButtonWrap>
                <ButtonWrap>
                  <SignupButton to="/signup">
                    회원가입
                  </SignupButton>
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


const HeaderWrap = styled.div`
  height: 64px;
  box-shadow: 0 2px 4px 0 hsl(0deg 0% 81% / 50%);
  background: #fff;
  margin-bottom: 5px;
  position: fixed;
  top:0;
  width: 100vw;
  z-index:10;
  
`;

const HeaderContainer = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  padding-right: 1.5rem;
`;

const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 auto;
  height: 100%;
`;

const Box = styled.div`
  display: flex;
  height: 100%;
  box-sizing: border-box;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

const SignupButton = styled(Link)`
  border: 1px solid #dbdbdb;
  padding: 0.5rem;
  font-size: 1.05rem;
  background-color: #ff7867;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;

const LoginButton = styled.button`
border: 1px solid #dbdbdb;
padding: 0.5rem;
font-size: 1.05rem;
border-radius: 4px;
background-color: white;
cursor: pointer;

`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
    margin-right: 0.5rem;
  
`;

const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;
