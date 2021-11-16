import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import styled from "styled-components";
import { useHistory } from "react-router";
import { StLink } from "../style/style";
import SearchBar from "./SearchBar";
import SignInModal from "../Modal/SignInModal";
import {
  FaRegHeart,
  FaShoppingCart,
  FaAngleRight,
  FaLightbulb,
  FaEllipsisH,
} from "react-icons/fa";
import { AiOutlinePlayCircle, AiOutlinePieChart } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import { GrNotes } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { BiCommentEdit, BiPencil } from "react-icons/bi";

function LoginedHeader() {
  const history = useHistory();
  const [signInModal, setSignInModal] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const toggleSignInModal = (e) => {
    console.log("hi", signInModal);
    setSignInModal(!signInModal);
  };

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('refreshToken');
    history.push('/');
  }

  const openProfileDropdown = () => {
    setProfileDropdown(true)
  }

  const closeProfileDropdown = () => {
    setProfileDropdown(false)
  }

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
                <ButtonItem>
                  <ButtonContent href="/course/따라하며-배우는-노드-리액트-기본/dashboard">
                    <Icon>
                      <BiPencil />
                    </Icon>
                    <span>최근강의</span>
                  </ButtonContent>
                  {/* <DropdownModal></DropdownModal> */}
                </ButtonItem>
                <ButtonItem>
                  <ButtonContent href="/carts">
                    <Icon>
                      <FaShoppingCart />
                    </Icon>
                  </ButtonContent>
                  {/* <DropdownModal></DropdownModal> */}
                </ButtonItem>
                <ButtonItem>
                  <ButtonContent href="/wishlist">
                    <Icon>
                      <FaRegHeart />
                    </Icon>
                  </ButtonContent>
                  {/* <DropdownModal></DropdownModal> */}
                </ButtonItem>
                <ButtonItem>
                  <ProfileWrap onMouseLeave={closeProfileDropdown} onMouseOver={openProfileDropdown}>
                    <Profile href="/dashboard">
                      <Img
                        src="https://cdn.inflearn.com/public/main/profile/default_profile.png"
                        alt="프로필"
                      />
                    </Profile>
                  </ProfileWrap>
                  <DropdownModal onMouseLeave={closeProfileDropdown} onMouseOver={openProfileDropdown} isOpen={profileDropdown}>
                    <ModalContent>
                      <Info>
                        <UserInfo>
                          <UserInfoLeft>
                            <div className="thumbnail">
                              <img
                                className="thumbnail_image"
                                src="https://cdn.inflearn.com/public/main/profile/default_profile.png"
                                alt="프로필"
                              />
                              <a href="/settings/account">설정</a>
                            </div>
                          </UserInfoLeft>
                          <UserInfoRight>
                            <a href="/users/409745">
                              <span className="name">
                                <IoHome className="home-icon" />
                                dwell
                              </span>
                              <span className="icon-container">
                                <FaAngleRight className="icon" size="16px" />
                              </span>
                            </a>
                            <div className="policy">학생</div>
                          </UserInfoRight>
                        </UserInfo>
                        <PointInfo>
                          <a href="/coupons" className="coupon">
                            <span className="title">쿠폰</span>
                            <span className="content">
                              <span className="value">0</span>개
                            </span>
                          </a>
                          <a href="/my-points" className="points">
                            <span className="title">포인트</span>
                            <span className="content">
                              <span className="value">0</span>잎
                            </span>
                          </a>
                        </PointInfo>
                      </Info>
                      <Menu>
                        <MenuTitleWrap>
                          <MenuTitle>학생</MenuTitle>
                        </MenuTitleWrap>
                        <MenuListWrap>
                          <MenuListContent>
                            <MenuItem>
                              <MenuItemLink href="/course/따라하며-배우는-노드-리액트-기본/lecture/37108">
                                <AiOutlinePlayCircle className="icon" />
                                <MenuItemSubtitle>
                                  이어서 학습하기
                                </MenuItemSubtitle>
                              </MenuItemLink>
                            </MenuItem>
                            <MenuItem>
                              <MenuItemLink href="/dashboard">
                                <AiOutlinePieChart className="icon" />
                                <MenuItemSubtitle>대시보드</MenuItemSubtitle>
                              </MenuItemLink>
                            </MenuItem>
                            <MenuItem>
                              <MenuItemLink href="/my-courses">
                                <ImBooks className="icon" />
                                <MenuItemSubtitle>내 학습</MenuItemSubtitle>
                              </MenuItemLink>
                            </MenuItem>
                            <MenuItem>
                              <MenuItemLink href="/my-notes">
                                <GrNotes className="icon" />
                                <MenuItemSubtitle>강의노트</MenuItemSubtitle>
                              </MenuItemLink>
                            </MenuItem>
                            <MenuItem>
                              <MenuItemLink href="/my-mentorings">
                                <FaLightbulb className="icon" />
                                <MenuItemSubtitle>멘토링</MenuItemSubtitle>
                              </MenuItemLink>
                            </MenuItem>
                            <MenuItem>
                              <MenuItemLink href="/my-posts">
                                <BiCommentEdit className="icon" />
                                <MenuItemSubtitle>
                                  작성한 게시글
                                </MenuItemSubtitle>
                              </MenuItemLink>
                            </MenuItem>
                            <MenuItem>
                              <MenuItemLink>
                                <FaEllipsisH className="icon" />
                                <MenuItemSubtitle>더보기</MenuItemSubtitle>
                              </MenuItemLink>
                            </MenuItem>
                          </MenuListContent>
                        </MenuListWrap>
                      </Menu>
                      <Footer>
                        <FooterLeft onClick={handleLogout}>
                          <a className="link">
                            로그아웃
                          </a>
                        </FooterLeft>
                        <FooterRight>
                          <a href="/faq" className="link">
                            고객센터
                          </a>
                          <FaAngleRight className="icon" />
                        </FooterRight>
                      </Footer>
                    </ModalContent>
                  </DropdownModal>
                </ButtonItem>
              </Buttons>
            </Box>
          </NavWrap>
        </HeaderContainer>
      </HeaderWrap>
    </>
  );
}

export default LoginedHeader;

const HeaderWrap = styled.div`
  height: 64px;
  box-shadow: 0 2px 4px 0 hsl(0deg 0% 81% / 50%);
  background: #fff;
  margin-bottom: 5px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
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

const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

const ButtonItem = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  line-height: 1.5;
  position: relative;
  padding: 0.5rem;
`;
const ButtonContent = styled.a`
  border: none;
  height: auto;
  line-height: 1;
  background: #00c471;
  color: #fff;
  padding: 8px;
  font-weight: 600;
  cursor: pointer;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  position: relative;
  vertical-align: top;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  align-items: center;
`;
const Icon = styled.div`
  position: relative;
  font-family: "Font Awesome 5 Duotone";
  font-weight: 900;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;

  span {
    margin-left: 0.25rem;
  }
`;
const DropdownModal = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  width: 316px;
  height: 506px;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgb(33 37 41 / 24%);
  background-color: #fff;
  top: 45px;
  right: -15px;
  z-index: 10;
  border: 1px solid #e0e0e0;
`;
const ModalContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProfileWrap = styled.div`
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;
const Profile = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #454545;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  padding: 1rem;
  display: block;
`;
const UserInfo = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
`;
const UserInfoLeft = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 8px;
  flex-shrink: 0;

  .thumbnail {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    border-radius: 100%;
  }

  .thumbnail_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  a {
    display: block;
    width: 100%;
    text-align: center;
    background-color: rgba(33, 37, 41, 0.64);
    color: #fff;
    font-size: 12px;
    position: absolute;
    bottom: 0;
  }
`;
const UserInfoRight = styled.div`
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    color: #212529;
    font-weight: 600;
    align-items: center;

    .name {
      word-wrap: break-word;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 3rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .icon {
      position: relative;
    font-family: "Font Awesome 5 Duotone";
    font-weight: 900;
    width: 16px;
    height: 16px;
    }

    .icon-container {
      width: 16px;
          height: 16px;
          font-size: 14px;
          flex-shrink: 0;
         
      }
    }
  }

  .policy {
    color: #495057;
    font-size: 14px;
  }
`;
const PointInfo = styled.div`
  display: flex;
  width: 100%;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f1f3f5;
    color: #495057;
    font-size: 14px;
    border-radius: 2px;
    flex-wrap: wrap;
    padding: 8px;

    .title {
      color: #495057;
      font-size: 14px;
      line-height: 1.43;
      margin-bottom: unset;
      font-weight: 500;
    }

    .content {
      display: flex;
      height: 100%;
      line-height: 1.43;
    }

    .value {
      color: #00c471;
      margin-right: 4px;
      font-weight: 600;
    }
  }

  .coupon {
    flex: 1;
    margin-right: 2px;
  }

  .points {
    flex: 2;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 0;
`;
const MenuTitleWrap = styled.div`
  display: flex;
`;
const MenuTitle = styled.div`
  color: #212529;
  border-bottom: 2px solid #00c471;
  font-weight: 600;
  flex: 1;
  padding: 8px;
  text-align: center;
  cursor: pointer;
`;
const MenuListWrap = styled.div`
  background-color: #f8f9fa;
  flex: 1 1 auto;
  height: 0;
  overflow-y: auto;
`;
const MenuListContent = styled.div`
  display: block;
  padding: 16px;
`;
const MenuItem = styled.div`
  margin-bottom: 1rem;
  color: #212529;
`;
const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #212529;
  font-weight: 300;
  cursor: pointer;
  .icon {
    width: 24px;
    height: 24px;
    font-size: 18px;
    margin-right: 8px;
  }
`;
const MenuItemSubtitle = styled.div`
  font-size: 16px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  font-size: 14px;
  color: #495057;
`;
const FooterLeft = styled.div`
  font-size: 14px;
  color: #495057;

  a {
    color: currentColor;
    text-decoration: none;
    cursor: pointer;
  }
`;
const FooterRight = styled.div`
  font-size: 14px;
  color: #495057;
  display: flex;
  align-items: center;

  a {
    display: inline-flex;
    align-items: center;

    .icon {
      width: 1rem;
      height: 1rem;
      line-height: 1;
      font-size: 14px;
    }
  }
`;
