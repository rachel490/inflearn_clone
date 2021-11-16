import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LectureCard from "../shared/LectureCard/LectureCard";
import Axios from "axios";
import { API } from "../../config";
import {
  MdViewModule,
  MdFormatListBulleted,
  MdMoreHoriz,
} from "react-icons/md";
import { IoClose } from "react-icons/io5";

const SearchBar = () => {
  return (
    <SearchBarWrap>
      <SearchBarContainer>
        <input type="text" placeholder="강의 검색하기" value="" />
        <button type="button">검색</button>
      </SearchBarContainer>
    </SearchBarWrap>
  );
};

const SearchBarWrap = styled.div`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #dedede;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
`;

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  overflow-y: hidden;

  input {
        flex: 1 1 300px;
        max-width: 300px;
        height: 36px;
        border: 1px solid #dedede;
        background: #fff;
        border-radius: 0;
        box-sizing: border-box;
        padding: 1em;
        font-size: 1rem;

        &::placeholder {
            color: rgba(0,0,0,.25);
        }
    }

    button {
        min-width: 53px;
        height: 36px;
        background: #1dc078;
        color: #fff;
        font-weight: 800;
        font-size: 1rem;
        border-radius: 0;
        margin-left: -1rem;
        border: none;
    }
  }
`;

const SortBar = () => {
  return (
    <SortBarContainer>
      <CategoryList>
        <Categorylecture>
          <a href="/courses">전체</a>
        </Categorylecture>
      </CategoryList>
      <ViewButtons>
        <ViewButton>
          <MdViewModule fontSize="large" />
        </ViewButton>
        <ViewButton>
          <MdFormatListBulleted fontSize="large" />
        </ViewButton>
      </ViewButtons>
      <Order>
        <Select id="courses_order_selector">
          <option value="seq" selected="">
            추천순
          </option>
          <option value="popular">인기순</option>
          <option value="recent">최신순</option>
          <option value="rating">평점순</option>
          <option value="famous">학생수순</option>
        </Select>
      </Order>
    </SortBarContainer>
  );
};

const SortBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  padding-right: 1rem;
  margin-left: 0.75rem;
  margin-bottom: 0;
`;
const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style: none;
  align-items: baseline;
`;
const Categorylecture = styled.li`
  align-items: center;
  display: flex;
  font-weight: 700;

  a {
    color: #454545;
    font-size: 18px;
    padding-left: 0;
  }
`;
const ViewButtons = styled.div`
  margin-left: auto;
  margin-right: 1rem;
  margin-bottom: 0;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const ViewButton = styled.button`
  background-color: #fff;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding: calc(0.375em - 1px) 0.75em;
  text-align: center;
  white-space: nowrap;
  -webkit-appearance: none;
  align-items: center;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
`;
const Order = styled.div`
  display: inline-block;
  max-width: 100%;
  position: relative;
  vertical-align: top;
  height: 2.25em;

  &::after {
    right: 1.125em;
    border: 3px solid #6c6c6c;
    border-radius: 2px;
    border-right: 0;
    border-top: 0;
    content: " ";
    display: block;
    height: 0.625em;
    margin-top: -0.4375em;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: rotate(-45deg);
    transform-origin: center;
    width: 0.625em;
    z-index: 4;
    box-sizing: border-box;
  }
`;

const Select = styled.select`
    background-color: #fff;
    border-color: #dbdbdb;
    color: #363636;
    cursor: pointer;
    display: block;
    font-size: 1em;
    max-width: 100%;
    outline: none;
    padding: calc(0.375em - 1px) calc(0.625em - 1px);
    padding-right: 2.5em;
    align-items: center;
    border-radius: 4px;
    box-shadow: none;
    height: 2.25em;
    justify-content: flex-start;
    line-height: 1.5;
    position: relative;
    vertical-align: top;
    appearance: none;
  }
`;

const TagBar = () => {
  return (
    <TagBarContainer>
      <SearchSkillBar>
        <Box>
          <input type="text" placeholder="기술검색" />
        </Box>
        <Box>
          <a>
            <IoClose />
          </a>
        </Box>
      </SearchSkillBar>
      <SkillButtons>
        <SkillButton>Python</SkillButton>
        <SkillButton>데이터 분석</SkillButton>
        <SkillButton>JavaScript</SkillButton>
        <SkillButton>MS-Office</SkillButton>
        <SkillButton>HTML/CSS</SkillButton>
        <SkillButton>모바일 앱 개발</SkillButton>
        <SkillButton>Java</SkillButton>
        <SkillButton>Back-End</SkillButton>
        <SkillButton>3D 모델링</SkillButton>
        <SkillButton>정보보안</SkillButton>
        <SkillButton>게임개발</SkillButton>
        <SkillButton>Front-End</SkillButton>
        <SkillButton>웹 개발</SkillButton>
        <SkillButton>데이터 시각화</SkillButton>
        <SkillButton>Android</SkillButton>
        <MoreButton>
          <MdMoreHoriz fontSize="large" />
        </MoreButton>
      </SkillButtons>
    </TagBarContainer>
  );
};

const TagBarContainer = styled.div`
  box-sizing: border-box;
  margin-top: 8px;
  margin-left: 0.75rem;
  position: relative;
  margin-bottom: 1rem;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const SearchSkillBar = styled.div`
  display: inline-flex;
  width: 11rem;
  margin-bottom: 0.4rem;
  margin-right: 0.5rem;
`;
const Box = styled.div`
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: left;

  input {
    height: 31px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-radius: 3px;
    box-shadow: none;
    background: #f6f6f6;
    color: #5f5f5f;
    border: 1px solid transparent;
    padding: calc(0.375em - 1px) calc(0.625em - 1px);
    box-sizing: border-box;
    font-size: 1rem;
    max-width: 100%;
    width: 100%;
  }

  a {
    height: 31px;
    border-radius: 4px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    background-color: #1dc078;
    border-color: transparent;
    color: #fff;
    padding: calc(0.375em - 1px) 0.75em;
    cursor: pointer;
    display: inline-flex;
    box-sizing: border-box;
    align-items: center;
  }
`;
const SkillButtons = styled.div`
  display: contents;
  line-height: 1.5;
  font-size: 1rem;
  font-weight: 400;
`;
const SkillButton = styled.button`
  cursor: pointer;
  background: #b8b8b8;
  color: #fff;
  border: none;
  padding: 1px 0.6rem 2px 0.8rem;
  font-size: 1rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  height: 2em;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  display: inline-flex;
  white-space: nowrap;
`;
const MoreButton = styled.button`
  padding: 1px 0.6rem;
  background: #3298dc;
  font-weight: 800;
  font-size: 0.9rem;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-bottom: 0.5rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  border-radius: 4px;
  align-items: center;
  display: inline-flex;
`;

const Pagination = () => {
  return (
    <PaginationWrap>
      <PaginationContainer>
        <NextButton>다음 페이지</NextButton>
        <PageList>
          <Pagelecture>
            <a>1</a>
          </Pagelecture>
          <Pagelecture>
            <a>2</a>
          </Pagelecture>
          <Pagelecture>
            <a>3</a>
          </Pagelecture>
          <Pagelecture>
            <a>4</a>
          </Pagelecture>
          <Pagelecture>
            <a>5</a>
          </Pagelecture>
          <Pagelecture>
            <a>6</a>
          </Pagelecture>
          <Pagelecture>
            <a>7</a>
          </Pagelecture>
          <Pagelecture>
            <a>8</a>
          </Pagelecture>
          <Pagelecture>
            <a>9</a>
          </Pagelecture>
          <Pagelecture>
            <a>10</a>
          </Pagelecture>
          <Pagelecture>
            <a>...</a>
          </Pagelecture>
          <Pagelecture>
            <a>68</a>
          </Pagelecture>
        </PageList>
      </PaginationContainer>
    </PaginationWrap>
  );
};

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  width: 100%;
  position: relative;
`;
const PaginationContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 0.75rem;
  margin: -0.25rem;
`;
const NextButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.4em 0.75em;
  border: none;
  white-space: nowrap;
  border: 1px solid #dbdbdb;
  background-color: transparent;
  color: #363636;
  min-width: 2.25em;
  justify-content: center;
  margin: 0.25rem;
  text-align: center;
  font-size: 1em;
  border-radius: 4px;
`;
const PageList = styled.ul`
  align-items: center;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
`;
const Pagelecture = styled.li`
  margin: 0;
  padding: 0;

  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    border-color: #dbdbdb;
    color: #363636;
    min-width: 2.25em;
    font-size: 1em;
    margin: 0.25rem;
    height: 2.25em;
    box-sizing: border-box;
    border-radius: 4px;
  }
`;

const LectureListContainer = () => {
  const fieldTranslate = {
    "it-programming": "개발•프로그래밍",
    "front-end": "프론트엔드",
    career: "커리어",
    business: "직무•마케팅",
    "finance-management": "금융•경영",
  };

  const [lectures, setLectures] = useState();
  const fields = window.location.href.split("courses/")[1];
  const fieldArray = fields ? fields.split("/") : "";
  const bigCategoryName =
    fieldArray.length > 0 ? `/${fieldTranslate[fieldArray[0]]}` : "";
  const middleCategoryName =
    fieldArray.length > 1 ? `/${fieldTranslate[fieldArray[1]]}` : "";

  useEffect(() => {
    const fetchLectures = async () => {
      const response = await Axios.get(
        API.LECTURE_LIST + bigCategoryName + middleCategoryName
      );
      const data = response.data.result;
      setLectures(data);
    };

    fetchLectures();
  }, []);

  return (
    <Container>
      <SearchBar />
      <SortBar />
      <TagBar />
      <MainContainer>
        {lectures ? (
          lectures.map((lecture) => {
            console.log("hi", lecture);
            return <LectureCard data={lecture} />;
          })
        ) : (
          <NoReultFound />
        )}
      </MainContainer>
      {lectures ? <Pagination /> : null}
    </Container>
  );
};

export default LectureListContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const NoReultFound = () => {
  return (
    <NoResultWrap>
    <NoResultContainer>
      <h3>🙈 검색 결과가 없어요! 🙊</h3>
      <p>필터를 다시 적용해보시거나 카테고리를 이동해보세요</p>
    </NoResultContainer>
    </NoResultWrap>
  );
};

const NoResultWrap = styled.div`
  display: flex;
  justify-content: center;
  align-tiems: center;
  width: 100%;
  height: 100%;
`
const NoResultContainer = styled.div`
  height: 350px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 3rem;
    font-weight: 700;
    color: #787878;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    color: #5f5f5f;
  }
`;
