import React, {useState} from "react";
import styled from "styled-components";
import { StLink } from "../style/style";
import { BiCommentEdit } from "react-icons/bi";
import {
  FaFeatherAlt,
  FaPaperPlane,
  FaRocket,
  FaBookOpen,
  FaCommentDots,
  FaLightbulb,
  FaLeaf,
  FaRegStar,
} from "react-icons/fa";

function Nav() {
  const [communityDropdown, setCommunityDropdown] = useState(false);
  const [inflearnDropdown, setInflearnDropdown] = useState(false);

  const communityDropdownClose = () => {
    setCommunityDropdown(false);
  }
  const communityDropdownOpen = () => {
    setCommunityDropdown(true);
  }

  const inflearnDropdownOpen = () => {
    setInflearnDropdown(true);
  }
  const inflearnDropdownClose = () => {
    setInflearnDropdown(false);
  }
 
  return (
    <NavWrap>
      <NavItem>
        <NavLink href="/courses">
          <NavTitle>강의</NavTitle>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/roadmaps">
          <NavTitle>로드맵</NavTitle>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/mentors">
          <NavTitle>멘토링</NavTitle>
        </NavLink>
      </NavItem>
      <NavItem onMouseOver={communityDropdownOpen} onMouseLeave={communityDropdownClose}>
        <NavLink href="/community/questions">
          <NavTitle>커뮤니티</NavTitle>
        </NavLink>
        <DropdownList isOpen={communityDropdown}>
          <DropdownItem href="/community/questions" >
            <Icon>
              <BiCommentEdit className="icon" />
            </Icon>
            <SubTitle>질문 & 답변</SubTitle>
          </DropdownItem>
          <DropdownItem href="/community/chats">
            <Icon>
              <FaCommentDots className="icon" />
            </Icon>
            <SubTitle>자유주제</SubTitle>
          </DropdownItem>
          <DropdownItem href="/community/studies">
            <Icon>
              <FaBookOpen className="icon" />
            </Icon>
            <SubTitle>스터디</SubTitle>
          </DropdownItem>
          <DropdownItem href="/blogs">
            <Icon>
              <FaFeatherAlt className="icon" />
            </Icon>
            <SubTitle>블로그</SubTitle>
          </DropdownItem>
        </DropdownList>
      </NavItem>
      <NavItem onMouseOver={inflearnDropdownOpen} onMouseLeave={inflearnDropdownClose}>
        <NavLink href="/inflearn">
          <NavTitle>인프런</NavTitle>
        </NavLink>
        <DropdownList href="/community/reviews" isOpen={inflearnDropdown}>
          <DropdownItem>
            <Icon>
              <FaRegStar className="icon" />
            </Icon>
            <SubTitle>수강평</SubTitle>
          </DropdownItem>
          <DropdownItem href="/community/mentorings-reviews">
            <Icon>
              <FaLightbulb className="icon" />
            </Icon>
            <SubTitle>멘토링 후기</SubTitle>
          </DropdownItem>
          <DropdownItem href="/pages?type=blog">
            <Icon>
              <FaPaperPlane className="icon" />
            </Icon>
            <SubTitle>인프런 이야기</SubTitle>
          </DropdownItem>
          <DropdownItem href="/pages?type=withus">
            <Icon>
              <FaRocket className="icon" />
            </Icon>
            <SubTitle>인프런 채용</SubTitle>
          </DropdownItem>
          <DropdownItem href="/inflearn">
            <Icon>
              <FaLeaf className="icon" />
            </Icon>
            <SubTitle>인프런 소개</SubTitle>
          </DropdownItem>
        </DropdownList>
      </NavItem>
    </NavWrap>
  );
}

export default Nav;

export const NavWrap = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  position: relative;
`;

export const NavItem = styled.div`
  padding: 0.5rem 0.875rem;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;

  // &:hover:before {
  //   content: "";
  //   position: absolute;
  //   border-color: transparent transparent #ececec;
  //   border-style: solid;
  //   border-width: 0 11px 11px;
  //   width: 1rem;
  //   height: 1 em;
  //   top: 45px;
  //   right: 0;
  //   left: 0;
  //   margin: 0 auto;
  //   z-index: 20;
  // }

  // &:hover:after {
  //   content: "";
  //   border-color: transparent transparent #fff;
  //   border-style: solid;
  //   border-width: 0 10px 10px;
  //   position: absolute;
  //   width: 1rem;
  //   height: 1rem;
  //   top: 45px;
  //   right: 0;
  //   left: 0;
  //   z-index: 21;
  //   margin: 0 auto;
  //   display: block;
  // }
`;

export const NavLink = styled.a`
  padding: 0.5rem;
  line-height: 1.5;
  color: #4a4a4a;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
`;

export const NavTitle = styled.span`
  font-weight: inherit;
  font-style: inherit;
`;

export const DropdownList = styled.div`
  top: calc(100% + -4px);
  background-color: #fff;
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
  display: ${props => props.isOpen ? 'block' : 'none'};
  border-radius: 2px;
  left: auto;
  right: 0;
  border-top: none;
  box-shadow: 0 8px 8px rgb(0 10 18 / 10%), 0 0 0 1px rgb(0 10 18 / 10%);
  min-width: 100%;
  position: absolute;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
`;
export const DropdownItem = styled.a`
  padding: 0.375rem 1rem;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const Icon = styled.span`
  box-sizing: content-box;
  font-size: inherit;
  width: 1rem;
  height: 1rem;
  line-height: 1;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  margin-right: 0.5rem;

  .icon {
    width: 1rem;
    text-align: center;
    font-weight: 300;
  }
`;
export const SubTitle = styled.span``;
