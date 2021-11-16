import React from 'react';
import styled from 'styled-components';

const DashboardSidebar = () => {
  return (
    <Aside>
      <Container>
        <Category>Home</Category>
        <List>
          <Item>
            <a href='/dashboard'>대시보드</a>
          </Item>
          <Item>
            <a href='/users/me'>블로그</a>
          </Item>
          <Item>
            <a href='/messages'>알림</a>
          </Item>
        </List>
        <Category>학습 관리</Category>
        <List>
          <Item>
            <a href='/my-notes'>강의노트</a>
          </Item>
          <Item>
            <a href='/my-mentorings'>멘토링</a>
          </Item>
          <Item>
            <a href='/my-posts'>작성한 게시글</a>
          </Item>
          <Item>
            <a href='/my-inquiries'>수강전 문의</a>
          </Item>
        </List>
        <Category>수강신청 관리</Category>
        <List>
          <Item>
            <a href='/carts'>수강바구니</a>
          </Item>
          <Item>
            <a href='/wishlist'>위시리스트</a>
          </Item>
          <Item>
            <a href='/coupons'>쿠폰함</a>
          </Item>
          <Item>
            <a href='/my-points'>포인트</a>
          </Item>
          <Item>
            <a href='/orders'>구매내역</a>
          </Item>
        </List>
        <Category>설정</Category>
        <List>
          <Item>
            <a href='/settings/account'>프로필</a>
          </Item>
          <Item>
            <a href='/settings/notification'>알림 설정</a>
          </Item>
        </List>
      </Container>
    </Aside>
  );
};

export default DashboardSidebar;

const Aside = styled.aside`
  padding-top: 1.75rem;
  width: 16.666%;
`;
const Container = styled.div``;
const Category = styled.p`
  color: #cfcfcf;
  font-size: 0.75em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1em;
  margin-top: 1em;
`;
const List = styled.ul`
  list-style: none;
  line-height: 1.25;
`;
const Item = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;

  a {
    text-decoration: none;
    cursor: pointer;
    border-radius: 2px;
    color: #454545;
    display: block;
    padding: 0.5em 0.75em;
  }
`;
