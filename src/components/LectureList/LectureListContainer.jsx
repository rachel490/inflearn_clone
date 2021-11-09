import React from "react";
import styled from "styled-components";
import LectureCard from "../shared/LectureCard/LectureCard";
import { MdViewModule, MdFormatListBulleted } from "react-icons/md";

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
  return <SortBarContainer></SortBarContainer>;
};

const SortBarContainer = styled.div``;

const TagBar = () => {
  return (
    <TagBarContainer>
      <CategoryList>
        <CategoryItem>
          <a href="/courses">전체</a>
        </CategoryItem>
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
        <Select id="courses_order_selector" name="order_select">
          <option value="seq" selected="">
            추천순
          </option>
          <option value="popular">인기순</option>
          <option value="recent">최신순</option>
          <option value="rating">평점순</option>
          <option value="famous">학생수순</option>
        </Select>
      </Order>
    </TagBarContainer>
  );
};

const TagBarContainer = styled.div`
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
const CategoryItem = styled.li`
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
`;

const Select = styled.select`
    background-color: #fff;
    border-color: #dbdbdb;
    color: #363636;
    cursor: pointer;
    display: inline-block;
    font-size: 1em;
    max-width: 100%;
    outline: none;
    padding: calc(0.375em - 1px) calc(0.625em - 1px);
    padding-right: 2.5em;
    align-items: center;
    border: 1 px solid transparent;
    border-radius: 4px;
    box-shadow: none;
    height: 2.25em;
    justify-content: flex-start;
    line-height: 1.5;
    position: relative;
    vertical-align: top;

    &::after {
      border-color: #6c6c6c;
      right: 1.125em;
      border: 3px solid transparent;
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
    }
  }
`;

const LectureListContainer = () => {
  return (
    <Container>
      <SearchBar />
      <SortBar />
      <TagBar />
      <MainContainer>
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
      </MainContainer>
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
