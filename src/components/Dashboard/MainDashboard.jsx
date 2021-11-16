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
              <ListCol>
                <Header>
                  비전공자를 위한 개발자 취업 올인원 가이드 [취업편]
                  <span>(방금)</span>
                </Header>
                <Progress>
                  <label>진도율 : 18강/44강 (40.90%)</label>
                  <progress value="40.90" max="100">
                    40.90%
                  </progress>
                </Progress>
              </ListCol>
              <Link>
                <a href="/my-courses" className='my-courses'>내 모든 강의</a>
                <a href="/course/개발자-취업-취업편/lecture/66438" className="continue">
                  이어서 학습하기
                </a>
              </Link>
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
              <span className="icon">🏃🏻</span>
              <span className="title">학습 통계</span>
            </Title>
            <List>
              <Item>
                <Num>0</Num>
                <Subject>완료 강의수</Subject>
              </Item>
              <Item>
                <Num>120</Num>
                <Subject>완료 수업수</Subject>
              </Item>
              <Item>
                <Num>0</Num>
                <Subject>획득 수료증</Subject>
              </Item>
            </List>
          </Box>
        </BoxWrap>
        <BoxWrap>
          <Box>
            <Title>
              <span className="icon">🏆</span>
              <span className="title">My Certificates</span>
            </Title>
            <Content>
              <List></List>
              <Link href="/my-certificates">수료증 전체보기</Link>
            </Content>
          </Box>
        </BoxWrap>
        <BoxWrap>
          <Box>
            <Title>
              <span className="icon">📚</span>
              <span className="title">최근 학습중인 강의</span>
            </Title>
            <Content>
              <ListCol>
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
              </ListCol>
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

const Wrap = styled.div`
  padding-top: 1rem;
  max-width: 980px;
  margin-bottom: 2rem;
  padding: 0.75rem;
  width: 100%;
  box-sizing: border-box;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const BoxWrap = styled.div`
  flex: none;
  width: 45%;
  padding: 0.75rem;
  box-sizing: border-box;
  margin: 1rem;
`;
const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 230px;
  padding: 0.5rem 1rem;
  overflow: hidden;
  box-shadow: 2px 8px 12px 0 rgb(20 20 20 / 2%);
  background-color: #fff;
  border-radius: 4px;
  color: #333;
`;
const Content = styled.div`
  overflow: auto;
  height: calc(100% - 25px);
`;
const Title = styled.div`
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 16px;

  .icon {
    margin-right: 0.5rem;
  }
`;
const List = styled.div`
  display: flex;
  img {
    height: 65px;
    width: 65px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 1rem;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: 700;
  }
`;
const ListCol = styled.div`
  display: flex;
  flex-direction: column;
  img {
    height: 65px;
    width: 65px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 1rem;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  a {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  time {
    margin-left: auto;
    text-align: right;
    font-size: 0.75rem;
    white-space: nowrap;
  }
`;
const Link = styled.a`
  color: #454545;
  position: absolute;
  right: 1rem;
  bottom: 0.5rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  a {
    cursor: pointer;
    justify-content: center;
    padding: calc(0.375em - 1px) 0.75em;
    text-align: center;
    white-space: nowrap;
    border-width: 1px;
    font-size: 1rem;
    height: 2.25em;
    border-radius: 4px;
    box-shadow: none;
    display: inline-flex;
    align-items: center;
    
  }

  .my-courses {
    background-color: #1dc078;
    border-color: transparent;
    color: #fff;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
;

  }

  .continue {
    background-color: #ff7867;
    border-color: transparent;
    color: #fff;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;

  }
`;
const Header = styled.header`
  line-height: 1.6;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 15px;
`;
const Progress = styled.div`
  label {
    font-size: 0.8rem;
    color: #333;
  }

  progress {
    max-width: 380px;
    width: 90%;
    height: 1.5rem;
    margin-top: 0.4rem;
  }
`;
const Item = styled.div`
  width: 33.3%;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Num = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #595959;
  opacity: 0.5;
  padding-top: 20px;
  cursor: pointer;

  &:hover {
    color: #1dc078;
    opacity: 1;
  }
`;
const Subject = styled.div`
  text-align: center;
  margin-top: 20px;
`;
