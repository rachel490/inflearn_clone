import React, {useState} from "react";
import styled from "styled-components";

const CommunitySidebar = ({category}) => {
  

  return (
    <Nav>
      <NavList>
        <NavContent>
          <NavTitle>함께 공부해요</NavTitle>
          <NavSubList>
            <NavSubItem>
              <Link href="/community/questions" category={category} name="questions">
                <Text>질문 & 답변</Text>
              </Link>
            </NavSubItem>
            <NavSubItem>
              <Link href="/community/chats" category={category} name="chats">
                <Text>자유주제</Text>
              </Link>
            </NavSubItem>
            <NavSubItem>
              <Link href="/community/studies" category={category} name="studies">
                <Text>스터디</Text>
              </Link>
            </NavSubItem>
          </NavSubList>
        </NavContent>
      </NavList>
    </Nav>
  );
};

export default CommunitySidebar;

const Nav = styled.nav`
  flex: 1 1 172px;
  max-width: 172px;
  margin-right: 24px;
`;
const NavList = styled.ul`
  padding: 0.75rem;
  list-style: none;
`;
const NavContent = styled.li`
  margin: 0;
  padding: 0;
  display: list-item;
`;
const NavTitle = styled.h6`
  margin-bottom: 1em;
  height: 20px;
  font-size: 12px;
  font-weight: 500;
  color: #adb5bd;
`;
const NavSubList = styled.ul`
  list-style: none;
`;
const NavSubItem = styled.li`
  padding: 0.5em 0.75em;
`;
const Link = styled.a`
font-weight: 700;
color: ${props => props.name === props.category ? '#00c471' : '#343a40'};
font-size: 16px;
line-height: 1.5;
text-decoration: none;
cursor: pointer;
`;
const Text = styled.span`
font-weight: inherit;
font-style: inherit;
`;
