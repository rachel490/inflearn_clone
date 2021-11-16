import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { API } from "../../config";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsPlayCircle } from "react-icons/bs";

const AccordionItem = ({
  data: { SESSION_ID, SESSION_NAME, SESSION_TOTAL_TIME, CLASS },
}) => {
  return (
    <ItemContainer>
      <ItemHeader>
        {/* <span className="isClose">
          <IoIosArrowDown />
        </span> */}
        <span className="isOpen">
          <IoIosArrowUp />
        </span>
        <span className="title">
          섹션 {SESSION_ID}. {SESSION_NAME}
        </span>
        <span className="info">
          {CLASS.length}강 ∙ {SESSION_TOTAL_TIME}소요
        </span>
      </ItemHeader>
      <ItemList>
        {CLASS.map((item) => (
          <ItemContent href="#">
            <BsPlayCircle className="lecture_icon" />
            <span className="lecture_title">{item.CLASS_NAME}</span>
            <span className="lecture_info">
              {item.CLASS_ROLE_ID == 1 ? (
                <PreviewButton>미리보기</PreviewButton>
              ) : (
                ""
              )}
              <Time>02:16</Time>
            </span>
          </ItemContent>
        ))}
      </ItemList>
    </ItemContainer>
  );
};

const ItemContainer = styled.div``;
const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-top: 1px solid #f1f3f5;
  border-bottom: 1px solid #f1f3f5;
  background-color: #f8f9fa;
  cursor: pointer;

  .title {
    line-height: 1.47;
    letter-spacing: -0.3px;
    font-size: 15px;
    color: #343a40;
    font-weight: 700;
  }

  .info {
    font-weight: 400;
    line-height: 1.47;
    letter-spacing: -0.3px;
    font-size: 15px;
    margin-left: auto;
    color: #343a40;
  }

  .isOpen {
    margin-right: 8px;
  }
`;
const ItemList = styled.div`
  max-height: 450px;
`;
const ItemContent = styled.a`
  display: flex;
  align-items: center;
  padding: 14px 20px;
  border-top: 1px solid #f1f3f5;

  .lecture_icon {
    margin-right: 8px;
    width: 16px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .lecture_title {
    font-weight: 400;
    line-height: 1.47;
    letter-spacing: -0.3px;
    font-size: 15px;
    color: #495057;
  }

  .lecture_info {
    display: inline-flex;
    align-items: center;
    margin-left: auto;
    flex-shrink: 0;
  }
`;

const PreviewButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  line-height: 1.38;
  letter-spacing: -0.3px;
  font-size: 13px;
  margin-left: 8px;
  padding: 0 7px;
  height: 26px;
  border-radius: 4px;
  border: 1px solid #00c471;
  color: #00c471;
  font-weight: 500;
  background-color: transparent;
`;

const Time = styled.span`
  font-weight: 400;
  line-height: 1.47;
  letter-spacing: -0.3px;
  font-size: 15px;
  margin-left: 16px;
  color: #343a40;
`;

const LectureDetailCurriculum = () => {
  const id = window.location.href.split("course/")[1];

  const [Curriculum, setCurriculum] = useState();

  useEffect(() => {
    const fetchCurriculum = async () => {
      const response = await axios.get(API.LECTURE_DETAIL_CURRICULUM(id));
      const data = response.data.result;
      setCurriculum(data);
    };

    fetchCurriculum();
  }, []);
  return (
    <Container>
      <Header>
        <Title>커리큘럼</Title>
        <SubTitle>총 73개 ˙ 6시간 11분의 수업</SubTitle>
      </Header>
      <Description>
        <span>
          이 강의는 영상, 수업 노트가 제공됩니다. 미리보기를 통해 콘텐츠를
          확인해보세요.
        </span>
        <button>모두 접기</button>
      </Description>
      <ContentAccordion>
        {Curriculum && Curriculum.map((item) => <AccordionItem data={item} />)}
      </ContentAccordion>
    </Container>
  );
};

export default LectureDetailCurriculum;

const Container = styled.div`
  margin-bottom: 8px;
`;
const Header = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 8px;
`;
const Title = styled.div`
  margin-right: 8px;
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

const Description = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;

  span {
    font-weight: 400;
    line-height: 1.47;
    letter-spacing: -0.3px;
    font-size: 15px;
    margin-right: 12px;
    color: #495057;
    word-break: keep-all;
  }

  button {
    border: 1px solid #dee2e6;
    color: #495057;
    background-color: #fff;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    line-height: 1.47;
    font-weight: 500;
    cursor: pointer;
    padding: 0 12px;
    height: 40px;
    line-height: 1.43;
    font-size: 14px;
    letter-spacing: -0.3px;
  }
`;
const ContentAccordion = styled.div`
  overflow: hidden;
  border: 1px solid #e9ecef;
  border-radius: 4px;
`;
