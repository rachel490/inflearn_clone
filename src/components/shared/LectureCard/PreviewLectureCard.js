import React, { useState } from "react";
import styled from "styled-components";
import StarRate from "../StarRate/StarRate";

const LectureCard = (props) => {
  const {NICK_NAME, PRICE, TITLE_IMAGE, STAR_POINT, LECTURE_NAME} = props.data;
  const size = props.size;
  console.log(size);
  
  return (

    <Wrap size={size}>
      <Container>
        <FrontContainer >
          <ImgSection>
            <img src={TITLE_IMAGE} alt="thumbnail" />
          </ImgSection>
          <ContentSection>
            <Title>{LECTURE_NAME}</Title>
            <Name>{NICK_NAME}</Name>
            <Rate>
              <StarRate rate={STAR_POINT} />
              <Review>(451)</Review>
            </Rate>
            <Price>
              <OriginalPrice>₩{PRICE}</OriginalPrice>
            </Price>
            <TagContainer>
              <StudentTag bgColor="hsl(182,75%,94%)">+10400명</StudentTag>
            </TagContainer>
          </ContentSection>
        </FrontContainer>
      </Container>
    </Wrap>
  );
};

export default LectureCard;

const Wrap = styled.div`
  width: ${props => props.size == 'big' ?  '33.3333333333%' : '231px'};
 flex: none;
 padding: 0.75rem;
box-sizing: border-box;
`;

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
`;

const FrontContainer = styled.a`
  position: relative;
`;

const ImgSection = styled.section`
  display: block;
  position: relative;

  img {
    height: 100%;
    width: 100%;
  }
`;

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  flex: 1 1 auto;
  font-weight: 700;
  margin-bottom: 0;
  line-height: 1.5em;
  height: 3rem;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;
`;

const Name = styled.span`
  color: #7d7d7d;
  font-size: 0.9rem;
`;

const Rate = styled.div`
  display: flex;
  algin-items: center;
  padding-top: 0.5rem;
`;

const Review = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.5rem;
  bottom: 0.3rem;
  color: #4a4a4a;
`;

const Price = styled.div`
  padding-top: 0.5rem;
`;

const OriginalPrice = styled.span`
  color: #175cbe;
  font-weight: 700;
  font-size: 1rem;
  opacity: 1;
  text-decoration: none;
`;

const TagContainer = styled.div`
  padding-top: 0.5rem;
`;

const StudentTag = styled.div`
  align-items: center;
  background-color: ${(props) => props.bgColor};
  border-radius: 4px;
  color: #454545;
  display: inline-flex;
  font-size: 0.75rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
  margin-right: 0.5rem;
`;
