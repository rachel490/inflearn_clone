import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { API } from "../config";
import PreviewLectureCard from "./shared/LectureCard/PreviewLectureCard";

const WishlistContent = () => {
  const [wishList, setWishList] = useState();

  useEffect(() => {
    const config = {
      method: "get",
      url: API.WISHLIST,
      headers: {
        "x-access-token": localStorage.getItem("jwtToken"),
      },
    };
    
    const fetchWishlist = async () => {
      console.log('fetching wishlist');
      const response = await axios(config);
      console.log(response)
      const data = response.data;
      setWishList(data);
    };

    fetchWishlist();
  }, []);

  return (
    <Wrap>
      <Controller />
      <MainContainer>
      {
        wishList && wishList.map(item => <PreviewLectureCard data={item} size="big"/>)
      }
      </MainContainer>
    </Wrap>
  );
};

export default WishlistContent;

const Wrap = styled.div`
  flex: none;
  width: 83.3333333333%;
  padding: 1rem;
`;

const MainContainer = styled.div`
    display: flex;
    width:100%;
    flex-wrap: wrap;
    
`

const Controller = () => {
  return (
    <ControllerWrap>
      <Filter>
        <Label>정렬 기준</Label>
        <SelectWrap>
          <Select>
            <Option value="published_date">최신순</Option>
            <Option value="title">제목순</Option>
            <Option value="student_cnt">학생수순</Option>
            <Option value="rating">평점순</Option>
          </Select>
        </SelectWrap>
      </Filter>
    </ControllerWrap>
  );
};

const ControllerWrap = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-left: 0.75rem;
`;
const Filter = styled.div`
  margin-right: 1rem;
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: left;
`;
const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  font-weight: 400;
  color: #929292;
  display: block;
`;
const SelectWrap = styled.div`
  height: 2.25em;
  display: inline-block;
  max-width: 100%;
  position: relative;
  vertical-align: top;

  &::after {
    right: 1.125em;
    z-index: 4;
    border: 3px solid #1dc078;
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
  height: 2.25em;
  justify-content: flex-start;
  line-height: 1.5;
  position: relative;
  vertical-align: top;
  -webkit-appearance: none;
  align-items: center;
  border-radius: 4px;
  box-shadow: none;
`;
const Option = styled.option``;
