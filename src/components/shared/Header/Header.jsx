import React from 'react';
import { ReactComponent as Logo } from '../../../logo.svg';

import {
  HeaderWrap,
  HeaderContainer,
  LogoContainer,
  LogoWrap,
  NavbarContainer,
  NavbarLeftContainer,
  NavMenuContainer,
  NavbarRightContainer,
  SearchbarConatiner,
  NavbarBtnsConatiner
} from './Header.style';

function Header() {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <LogoContainer>
          <LogoWrap to='/'>
            <Logo />
          </LogoWrap>
        </LogoContainer>
        <NavbarContainer>
          <NavbarLeftContainer>
            <NavMenuContainer>

            </NavMenuContainer>
          </NavbarLeftContainer>
          <NavbarRightContainer>
              <SearchbarConatiner>

              </SearchbarConatiner>
              <NavbarBtnsConatiner>

              </NavbarBtnsConatiner>
          </NavbarRightContainer>
        </NavbarContainer>
      </HeaderContainer>
    </HeaderWrap>
  );
}

export default Header;
