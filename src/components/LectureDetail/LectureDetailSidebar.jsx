import React from 'react';
import styled from 'styled-components';
import { AiOutlineShareAlt,AiOutlineHeart,AiOutlineFolderAdd,AiOutlineQuestionCircle } from "react-icons/ai"
import { IoIosArrowForward } from "react-icons/io";
import { BsDot } from "react-icons/bs";

const LectureDetailSidebar = () => {
  return (
    <Wrap>
        <Container>
          <CardContainer>
            <CardTop>
              <Price>55,000원</Price>
              <ButtonWrap>
                  <Button>수강신청</Button>
              </ButtonWrap>
              <SubButtons>
                <SubButton><AiOutlineFolderAdd />폴더에 추가</SubButton>
                <SubButton><AiOutlineHeart />143</SubButton>
                <SubButton><AiOutlineShareAlt />공유</SubButton>
              </SubButtons>
            </CardTop>
            <CardBottom>
              <InfoList>
                <InfoItem><BsDot/>지식공유자 : 장기효(캡틴판교)</InfoItem>
                <InfoItem><BsDot/>총 73개 수업˙총 6시간 11분</InfoItem>
                <InfoItem><BsDot/>평생 무제한 수강</InfoItem>
                <InfoItem><BsDot/>수료증 발급 강의</InfoItem>
                <InfoItem><BsDot/>입문 <IoIosArrowForward/>초급 <IoIosArrowForward/>중급이상 대상</InfoItem>
              </InfoList>
            </CardBottom>
          </CardContainer>
          <InquiryContainer>
            <InquiryHeader>
              <AiOutlineQuestionCircle/>
              <span>수강 전 궁금한 점이 있나요?</span>
            </InquiryHeader>
            <InquiryLink>
              <span>문의하기</span>
              <IoIosArrowForward />
            </InquiryLink>
          </InquiryContainer>
        </Container>
    </Wrap>
  )
};

export default LectureDetailSidebar;

const Wrap = styled.div`
  position: sticky;
  top: 75px;
  margin: 20px 34px 20px auto;
  width: 332px;
`;

const Container = styled.div`

`

const CardContainer = styled.div`
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #f1f3f5;
  box-shadow: 0 1px 3px 0 rgb(33 37 41 / 3%);
  background-color: #f8f9fa;
`

const CardTop = styled.div`
  border-radius: 8px;
  border-bottom: 1px solid #f1f3f5;
  background-color: #fff;
`

const Price = styled.h4`
  margin-bottom: 20px;
  padding: 20px 24px 0;
  letter-spacing: -.3px;
  font-size: 24px;
  line-height: 1.42;
  color: #343a40;
  font-weight: 700;
`

const ButtonWrap = styled.div`
  margin-bottom: 8px;
  padding: 0 24px;

`
const Button = styled.button`
  height: 48px;
  line-height: 1.47;
  font-size: 15px;
  letter-spacing: -.3px;
  border-color: #00c471;
  font-weight: 700;
  background-color: #00c471;
  min-width: 100%;
  border: 1px solid;
  color: #fff;

`

const SubButtons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 24px;
`

const SubButton = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: -.3px;
  font-size: 14px;
  position: relative;
  flex: auto;
  padding: 10px 12px;
  color: #495057;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
`

const CardBottom = styled.div`

`

const InfoList = styled.ul`
  padding: 16px 24px;
  background-color: #f8f9fa;
`

const InfoItem = styled.li`
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: -.3px;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #868e96;
`

const InquiryContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  padding: 18px 20px;
  border: 1px solid #f1f3f5;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgb(33 37 41 / 3%);
`
const InquiryHeader = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: -.3px;
  font-size: 14px;
  color: #495057;
  font-weight: 700;
`

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

`