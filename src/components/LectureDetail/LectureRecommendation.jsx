import React from "react";
import styled from "styled-components";
import { BsCartPlus, BsHeart, BsPlusLg } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import StarRate from "../shared/StarRate/StarRate";

const LectureRecommendationItem = () => {
  return (
    <ItemWrap>
      <Item>
        <Thumbnail>
          <img
            loading="lazy"
            src="https://cdn.inflearn.com/public/courses/326082/cover/c6519e92-f334-46ac-8a31-6290db19b32a"
            data-src="https://cdn.inflearn.com/public/courses/326082/cover/c6519e92-f334-46ac-8a31-6290db19b32a"
            alt="image"
          />
        </Thumbnail>
        <InfoWrap>
          <Info>
            <Name>실전 프로젝트로 배우는 타입스크립트</Name>
            <Tags>
              <Tag bgColor="hsl(216.97802846099137,53.40494204840556%,90.56660587080923%)">
                TypeScript
              </Tag>
              <Tag bgColor="hsl(355.1331456561915,69.09826004032358%,90.36852227234142%)">
                Front-End
              </Tag>
              <Tag bgColor="hsl(63.090242388817465,78.32854757000368%,89.73051654065193%)">
                ES6
              </Tag>
            </Tags>
            <Rate>
              <StarRate rate={5} />
              <ReviewNum>90</ReviewNum>
            </Rate>
          </Info>
          <PriceWrap>
            <Price>
              <span>₩55,000</span>
            </Price>
            <Buttons>
              <span>
                <BsCartPlus />
              </span>
              <span>
                <BsHeart />
              </span>
              <span>
                <BsPlusLg />
              </span>
            </Buttons>
          </PriceWrap>
        </InfoWrap>
      </Item>
    </ItemWrap>
  );
};

const ItemWrap = styled.div`
  margin-bottom: 8px;
  flex-basis: 50%;
  max-width: 50%;
  height: 100%;
  background-color: transparent;
  border-radius: 4px;
  color: #333;
  display: flex;
`;

const Item = styled.div`
  height: 100%;
  background-color: #fff;
  border-radius: 4px;
  color: #333;
  align-items: flex-start;
  display: flex;
  text-align: left;
  padding: 1.25rem;
  box-shadow: 0 2px 3px rgb(0 10 18 / 10%), 0 0 0 1px rgb(0 10 18 / 10%);
`;
const Thumbnail = styled.a`
  margin-right: 1rem;
  width: 8rem;
  display: block;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    display: block;
  }
`;
const InfoWrap = styled.div`
  width: 100%;
  display: flex;
`;
const Info = styled.a`
  color: currentColor;
  text-decoration: none;
  cursor: pointer;
`;
const Name = styled.h2`
  font-weight: 700;
  font-size: 1.125rem;
`;
const Tags = styled.div`
  margin: 0.25rem 0;
`;
const Tag = styled.div`
  align-items: center;
  color: #454545;
  display: inline-flex;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
  margin-bottom: 0.5rem;
  font-size: 0.5rem;
  background-color: ${(props) => props.bgColor};
`;
const Rate = styled.div`
  position: relative;
`;
const ReviewNum = styled.div`
  position: absolute;
  top: 0.25rem;
  font-size: 0.5rem;
`;
const PriceWrap = styled.div`
  margin-left: auto;
  text-align: right;
  min-width: 6.5rem;
`;
const Price = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
`;
const Buttons = styled.div`
  margin-top: 0.25rem;
  text-align: right;

  span {
    -webkit-appearance: none;
    align-items: center;
    border-radius: 4px;
    box-shadow: none;
    display: inline-flex;
    font-size: 1rem;
    line-height: 1.5;
    position: relative;
    vertical-align: top;
    color: #363636;
    cursor: pointer;
    justify-content: center;
    padding: calc(0.375em - 1px) 0.125em;
    text-align: center;
    white-space: nowrap;
    margin-bottom: 0.125rem;
  }
`;

const LectureRecommendation = () => {
  return (
    <Wrap>
      <Container>
        <Header>
          <Title>
            장기효(캡틴판교)님의 다른 강의 <BiLinkExternal />
          </Title>
          <SubTitle>지식공유자님의 다른 강의를 만나보세요!</SubTitle>
        </Header>
        <Content>
          <List>
            <LectureRecommendationItem />
            <LectureRecommendationItem />
            <LectureRecommendationItem />
            <LectureRecommendationItem />
          </List>
        </Content>
      </Container>
    </Wrap>
  );
};

export default LectureRecommendation;

const Wrap = styled.div`
  padding: 48px 0;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 54px;
  box-sizing: border-box;
`;

const Header = styled.div`
  margin-bottom: 24px;
`;
const Title = styled.div`
  text-decoration: underline;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  line-height: 1.45;
  letter-spacing: -0.3px;
  color: #343a40;
  font-size: 22px;
  font-weight: 700;
`;
const SubTitle = styled.div`
  line-height: 1.5;
  letter-spacing: -0.3px;
  font-size: 16px;
  color: #adb5bd;
  font-weight: 500;
`;
const Content = styled.div``;
const List = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -8px;
`;
