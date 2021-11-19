import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import styled from "styled-components";

const LectureHistory = () => {
  return (
    <Wrap>
      <Content>
        <RecentLectureCard>
          <a href="/course/따라하며-배우는-노드-리액트-기본/dashboard"></a>
          <ImgContent>
            <ImgWrap>
              <img
                className="thumbnail"
                loading="lazy"
                src="https://cdn.inflearn.com/public/courses/324951/course_cover/510c265a-6de2-456d-8e6a-351b9ce29608/nodeReactbasic.png"
                alt="nodeReactbasic.png"
              />
            </ImgWrap>
          </ImgContent>
          <InfoContent>
            <TopContent>
              <h1>따라하며 배우는 노드, 리액트 시리즈 - 기본 강의</h1>
            </TopContent>
            <BottomContent>
              <Progress>
                <Text>
                  <span className="term">기한: 무제한</span>
                  <span className="progress">진도율: 30.55%</span>
                </Text>
                <ProgressBar>
                  <progress
                    className="progress-bar"
                    value="30.55"
                    max="100"
                  ></progress>
                </ProgressBar>
              </Progress>
              <Button>
                <a href="/course/따라하며-배우는-노드-리액트-기본/lecture/37108">
                  <span>바로 학습</span>
                  <BsFillPlayFill className="icon" />
                </a>
              </Button>
            </BottomContent>
          </InfoContent>
        </RecentLectureCard>
        <RecentLectureCard>
          <a href="/course/개발자-취업-취업편/dashboard"></a>
          <ImgContent>
            <ImgWrap>
              <img
                className="thumbnail"
                loading="lazy"
                src="https://cdn.inflearn.com/public/courses/326469/cover/e2cf0ffa-536d-4072-9eb6-5373b45bdfb6"
                alt="image"
              />
            </ImgWrap>
          </ImgContent>
          <InfoContent>
            <TopContent>
              <h1>비전공자를 위한 개발자 취업 올인원 가이드 [취업편]</h1>
            </TopContent>
            <BottomContent>
              <Progress>
                <Text>
                  <span className="term">기한: 무제한</span>
                  <span className="progress">진도율: 40.90%</span>
                </Text>
                <ProgressBar>
                  <progress
                    className="progress-bar"
                    value="40.90"
                    max="100"
                  ></progress>
                </ProgressBar>
              </Progress>
              <Button>
                <a href="/course/따라하며-배우는-노드-리액트-기본/lecture/37108">
                  <span>바로 학습</span>
                  <BsFillPlayFill className="icon" />
                </a>
              </Button>
            </BottomContent>
          </InfoContent>
        </RecentLectureCard>
      </Content>
    </Wrap>
  );
};

export default LectureHistory;

const Wrap = styled.div`
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  justify-content: space-between;
`;
const RecentLectureCard = styled.div`
  color: #454545;
  max-width: 100%;
  display: flex;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  border: 1px solid #dedede;
  background-color: #fff;
  border-radius: 3px;
  transition: all 0.2s ease;
  position: relative;
  min-width: 500px;
  margin: 4px;
  width: 48%;

  a {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
  }
`;
const ImgContent = styled.div`
  flex-shrink: 0;
  width: 174px;
`;
const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 174px;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const InfoContent = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 12px;
`;
const TopContent = styled.div`
  h1 {
    color: #333;
    font-weight: 700;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    max-height: 3rem;
  }
`;
const BottomContent = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  width: 100%;
`;
const Progress = styled.div`
  flex: 1 1 auto;
  color: #595959;
  padding-right: 12px;
`;
const Text = styled.div`
  font-size: 0.875rem;
  margin-bottom: 8px;

  .progress:before {
    display: inline-block;
    content: "|";
    color: #dedede;
    margin: 0 8px;
    font-size: 16px;
  }
`;
const ProgressBar = styled.div`
  .progress-bar {
    height: 2px;
    verflow: hidden;
    padding: 0;
    width: 100%;
    border: none;
    display: block;
  }
`;
const Button = styled.div`
  flex-shrink: 0;
  text-align: right;

  a {
    font-weight: 700;
    height: auto;
    line-height: 1;
    font-size: 14px;
    background-color: #1dc078;
    color: #fff;
    z-index: 2;
    border: none;
    padding: 8px;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    justify-content: center;
    position: relative;
    vertical-align: top;
    border-radius: 4px;
    box-shadow: none;
    display: inline-flex;
    box-sizing: border-box;
  }

  .icon {
    width: 1rem;
    height: 1rem;
  }
`;
