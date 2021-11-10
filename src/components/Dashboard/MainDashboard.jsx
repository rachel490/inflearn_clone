import React from "react";
import styled from "styled-components";

const MainDashboard = () => {
  return (
    <Wrap>
      <Container>
        <BoxWrap>
          <Box>
            <Title>
              <span className="icon">😀</span>
              <span className="title">ccori12님 프로필</span>
            </Title>
            <Content>
              <List>
                <img
                  src="https://cdn.inflearn.com/public/users/thumbnails/409745/392e8028-31e5-46ea-a736-ae9a8372371e"
                  alt="ccori12의 프로필"
                />
                <h5>ccori12님, 안녕하세요! 👋🏼</h5>
              </List>
              <Link href="/settings/account">프로필 수정하기</Link>
            </Content>
          </Box>
        </BoxWrap>
        <BoxWrap>
          <Box>
            <Title>
              <span className="icon">📖</span>
              <span className="title">최근 학습 강의</span>
            </Title>
            <Content>
              <Header>
                비전공자를 위한 개발자 취업 올인원 가이드 [취업편]
                <span>(방금)</span>
              </Header>
              <Link href="/settings/account">프로필 수정하기</Link>
            </Content>
          </Box>
        </BoxWrap>
        <BoxWrap>
          <Box>
            <Title>
              <span className="icon">📝</span>
              <span className="title">최근 내 노트</span>
            </Title>
            <Content>
              <List></List>
              <Link href="/my-notes">내노트 전체보기</Link>
            </Content>
          </Box>
        </BoxWrap>
        <BoxWrap>
          <Box>
            <Title>
              <span className="icon">😀</span>
              <span className="title">ccori12님 프로필</span>
            </Title>
            <Content>
              <List>
                <img
                  src="https://cdn.inflearn.com/public/users/thumbnails/409745/392e8028-31e5-46ea-a736-ae9a8372371e"
                  alt="ccori12의 프로필"
                />
                <h5>ccori12님, 안녕하세요! 👋🏼</h5>
              </List>
              <Link href="/settings/account">프로필 수정하기</Link>
            </Content>
          </Box>
        </BoxWrap>
        <BoxWrap>
          <Box>
            <Title>
              <span className="icon">😀</span>
              <span className="title">ccori12님 프로필</span>
            </Title>
            <Content>
              <List>
                <a
                  href="/course/개발자-취업-취업편/lecture/66438"
                  class="course_item"
                >
                  <div class="course_title">
                    비전공자를 위한 개발자 취업 올인원 가이드 [취업편]
                  </div>
                  <time
                    class="finished_time"
                    datetime="Wed Nov 10 2021 16:57:37 GMT+0900 (GMT+09:00)"
                  >
                    방금
                  </time>
                </a>
                <a
                  href="/course/따라하며-배우는-노드-리액트-기본/lecture/37108"
                  class="course_item"
                >
                  <div class="course_title">
                    따라하며 배우는 노드, 리액트 시리즈 - 기본 강의
                  </div>
                  <time
                    class="finished_time"
                    datetime="Wed Nov 10 2021 11:00:30 GMT+0900 (GMT+09:00)"
                  >
                    5시간 전
                  </time>
                </a>
                <a
                  href="/course/파이썬-알고리즘-문제풀이-코딩테스트/lecture/26913"
                  class="course_item"
                >
                  <div class="course_title">
                    파이썬 알고리즘 문제풀이 (코딩테스트 대비)
                  </div>
                  <time
                    class="finished_time"
                    datetime="Mon Nov 01 2021 20:42:40 GMT+0900 (GMT+09:00)"
                  >
                    8일 전
                  </time>
                </a>
                <a
                  href="/course/비전공자를-위한-개발자-취업/lecture/39685"
                  class="course_item"
                >
                  <div class="course_title">
                    비전공자를 위한 개발자 취업 실전 가이드
                  </div>
                  <time
                    class="finished_time"
                    datetime="Tue May 04 2021 00:50:48 GMT+0900 (GMT+09:00)"
                  >
                    6달 전
                  </time>
                </a>
                <a
                  href="/course/기본적인-머신러닝-딥러닝-강좌/lecture/3374"
                  class="course_item"
                >
                  <div class="course_title">
                    모두를 위한 딥러닝 - 기본적인 머신러닝과 딥러닝 강좌
                  </div>
                  <time
                    class="finished_time"
                    datetime="Fri Mar 26 2021 20:50:29 GMT+0900 (GMT+09:00)"
                  >
                    7달 전
                  </time>
                </a>
              </List>
              <Link href="/my-courses">내강의 전체보기</Link>
            </Content>
          </Box>
        </BoxWrap>
        <BoxWrap>
          <Box>
            <Title>
              <span className="icon">🎓</span>
              <span className="title">완료한 강의</span>
            </Title>
            <Content>
              <List></List>
              <Link href="/my-courses">내강의 전체보기</Link>
            </Content>
          </Box>
        </BoxWrap>
      </Container>
    </Wrap>
  );
};

export default MainDashboard;


const Wrap = styled.div``;
const Container = styled.div``;
const BoxWrap = styled.div``;
const Box = styled.div``;
const Content = styled.div``;
const Title = styled.div``;
const List = styled.div``;
const Link = styled.a``;
const Header = styled.header``;