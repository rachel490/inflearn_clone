import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../../config";
import styled from "styled-components";
import {
  AiOutlineShareAlt,
  AiOutlineHeart,
  AiOutlineFolderAdd,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { BsDot } from "react-icons/bs";

const LectureDetailSidebar = () => {
  const id = window.location.href.split("course/")[1];

  const [Side, setSide] = useState();

  useEffect(() => {
    const fetchSide = async () => {
      const response = await axios.get(API.LECTURE_DETAIL_SIDEBAR(id));
      const data = response.data.result;
      setSide(data);
    };

    fetchSide();
    console.log(Side);
  }, []);

  return Side ? (
    <Wrap>
      <Container>
        <CardContainer>
          <CardTop>
            <Price>총 {Side.PRICE}원</Price>
            <ButtonWrap>
              <Button>수강신청</Button>
            </ButtonWrap>
            <SubButtons>
              <SubButton>
                <AiOutlineFolderAdd className="icon" />
                폴더에 추가
              </SubButton>
              <SubButton>
                <AiOutlineHeart className="icon" />
                143
              </SubButton>
              <SubButton>
                <AiOutlineShareAlt className="icon" />
                공유
              </SubButton>
            </SubButtons>
          </CardTop>
          <CardBottom>
            <InfoList>
              <InfoItem>
                <BsDot className="icon" />
                지식공유자 : {Side.NICK_NAME}
              </InfoItem>
              <InfoItem>
                <BsDot className="icon" />총 {Side.CLASS_COUNT}개 수업˙총{" "}
                {Side.TOTAL_TIME}
              </InfoItem>
              <InfoItem>
                <BsDot className="icon" />
                평생 무제한 수강
              </InfoItem>
              <InfoItem>
                <BsDot className="icon" />
                수료증 발급 강의
              </InfoItem>
              <InfoItem>
                {Side.LEARNING_LEVEL == 1 && (
                  <>
                    <BsDot className="icon" /> <strong>입문</strong>{" "}
                    <IoIosArrowForward /> 초급 <IoIosArrowForward /> 중급이상
                    대상{" "}
                  </>
                )}
                {Side.LEARNING_LEVEL == 2 && (
                  <>
                    <BsDot className="icon" /> 입문 <IoIosArrowForward />{" "}
                    <strong>초급</strong> <IoIosArrowForward /> 중급이상 대상{" "}
                  </>
                )}
                {Side.LEARNING_LEVEL == 3 && (
                  <>
                    <BsDot className="icon" /> 입문 <IoIosArrowForward /> 초급{" "}
                    <IoIosArrowForward /> <strong>중급이상 대상 </strong>
                  </>
                )}
              </InfoItem>
            </InfoList>
          </CardBottom>
        </CardContainer>
        <InquiryContainer>
          <InquiryHeader>
            <AiOutlineQuestionCircle />
            <span>수강 전 궁금한 점이 있나요?</span>
          </InquiryHeader>
          <InquiryLink>
            <span>문의하기</span>
            <IoIosArrowForward />
          </InquiryLink>
        </InquiryContainer>
      </Container>
    </Wrap>
  ) : (
    "loading..."
  );
};

export default LectureDetailSidebar;

const Wrap = styled.div`
  flex-basis: 33.33333333%;
  max-width: 33.33333333%;
`;

const Container = styled.div`
  position: sticky;
  top: 75px;
  margin: 20px 34px 20px auto;
  width: 332px;
`;

const CardContainer = styled.div`
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #f1f3f5;
  box-shadow: 0 1px 3px 0 rgb(33 37 41 / 3%);
  background-color: #f8f9fa;
`;

const CardTop = styled.div`
  border-radius: 8px;
  border-bottom: 1px solid #f1f3f5;
  background-color: #fff;
`;

const Price = styled.h4`
  margin-bottom: 20px;
  padding: 20px 24px 0;
  letter-spacing: -0.3px;
  font-size: 24px;
  line-height: 1.42;
  color: #343a40;
  font-weight: 700;
`;

const ButtonWrap = styled.div`
  margin-bottom: 8px;
  padding: 0 24px;
`;
const Button = styled.button`
  height: 48px;
  line-height: 1.47;
  font-size: 15px;
  letter-spacing: -0.3px;
  border-color: #00c471;
  font-weight: 700;
  background-color: #00c471;
  min-width: 100%;
  border: 1px solid;
  color: #fff;
`;

const SubButtons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 24px;
`;

const SubButton = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: -0.3px;
  font-size: 14px;
  position: relative;
  flex: auto;
  padding: 10px 12px;
  color: #495057;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;

  .icon {
    margin-right: 6px;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 1px;
    height: 16px;
    background-color: #dee2e6;
  }

  &:lastChild::after {
    display: none;
  }

`;

const CardBottom = styled.div``;

const InfoList = styled.ul`
  padding: 16px 24px;
  background-color: #f8f9fa;
`;

const InfoItem = styled.li`
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: -0.3px;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #868e96;

  .icon {
    margin-right: 6px;
  }

  strong {
    font-weight: 900;
  }
`;

const InquiryContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  padding: 18px 20px;
  border: 1px solid #f1f3f5;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgb(33 37 41 / 3%);
`;
const InquiryHeader = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: -0.3px;
  font-size: 14px;
  color: #495057;
  font-weight: 700;
`;

const InquiryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: -.3px;
  font-size: 14px;
  margin-left: auto;
  color: #495057;
  font-weight: 500;
  text-decoration: underline;
}

`;
