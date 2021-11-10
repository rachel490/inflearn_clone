import React, { useState } from "react";
import styled from "styled-components";

const Category = () => {
  const [ProgrammingIsActive, setProgrammingIsActive] = useState(false);
  const [SecurityIsActive, setSecurityIsActive] = useState(false);
  const [DataScienceIsActive, setDataScienceIsActive] = useState(false);
  const [CreativeIsActive, setCreativeIsActive] = useState(false);
  const [BusinessIsActive, setBusinessIsActive] = useState(false);
  const [AcademicsIsActive, setAcademicsIsActive] = useState(false);
  const [CareerIsActive, setCareerIsActive] = useState(false);
  const [LifeIsActive, setLifeIsActive] = useState(false);

  const handleProgrammingToggle = () => {
    setProgrammingIsActive(!ProgrammingIsActive);
  };
  const handleSecurityToggle = () => {
    setSecurityIsActive(!SecurityIsActive);
  };
  const handleDataScienceToggle = () => {
    setDataScienceIsActive(!DataScienceIsActive);
  };
  const handleCreativeToggle = () => {
    setCreativeIsActive(!CreativeIsActive);
  };
  const handleBusinessToggle = () => {
    setBusinessIsActive(!BusinessIsActive);
  };
  const handleAcademicsToggle = () => {
    setAcademicsIsActive(!AcademicsIsActive);
  };
  const handleCareerToggle = () => {
    setCareerIsActive(!CareerIsActive);
  };
  const handleLifeToggle = () => {
    setLifeIsActive(!LifeIsActive);
  };

  return (
    <>
      <Item>
        <Title>
          <a href="/courses">전체 강의</a>
        </Title>
      </Item>
      <Item onClick={handleProgrammingToggle}>
        <Header isActive={ProgrammingIsActive}>개발 · 프로그래밍</Header>
        <Body isActive={ProgrammingIsActive}>
          <a href="/courses/it-programming">ALL</a>
          <a href="/courses/it-programming/web-dev">웹 개발</a>
          <a href="/courses/it-programming/front-end">프론트엔드</a>
          <a href="/courses/it-programming/back-end">백엔드</a>
          <a href="/courses/it-programming/full-stack">풀스택</a>
          <a href="/courses/it-programming/mobile-app">모바일 앱 개발</a>
          <a href="/courses/it-programming/programming-lang">프로그래밍 언어</a>
          <a href="/courses/it-programming/algorithm"> 알고리즘 · 자료구조 </a>
          <a href="/courses/it-programming/dev-data-science">데이터 사이언스</a>
          <a href="/courses/it-programming/database-dev">데이터베이스</a>
          <a href="/courses/it-programming/programming-tool">개발 도구</a>
          <a href="/courses/it-programming/devops-infra">데브옵스 · 인프라</a>
          <a href="/courses/it-programming/game-dev">게임 개발</a>
          <a href="/courses/it-programming/embedded-iot">임베디드 · IoT</a>
          <a href="/courses/it-programming/desktop-application">
            데스크톱 앱 개발
          </a>
          <a href="/courses/it-programming/dev-besides">교양 · 기타</a>
        </Body>
      </Item>
      <Item onClick={handleSecurityToggle}>
        <Header isActive={SecurityIsActive}>보안 · 네트워크</Header>
        <Body isActive={SecurityIsActive}>
          <a href="/courses/it">ALL</a>
          <a href="/courses/it/security">보안</a>
          <a href="/courses/it/system">시스템</a>
          <a href="/courses/it/cloud">클라우드</a>
          <a href="/courses/it/blockchain">블록체인</a>
          <a href="/courses/it/it-besides">기타</a>
        </Body>
      </Item>
      <Item onClick={handleDataScienceToggle}>
        <Header isActive={DataScienceIsActive}>데이터 사이언스</Header>
        <Body isActive={DataScienceIsActive}>
          <a href="/courses/data-science">ALL</a>
          <a href="/courses/data-science/data-analysis">데이터 분석</a>
          <a href="/courses/data-science/artificial-intelligence">인공지능</a>
          <a href="/courses/data-science/data-visualization">데이터 시각화</a>
          <a href="/courses/data-science/data-processing">데이터 수집 · 처리</a>
          <a href="/courses/data-science/data-besides">기타</a>
        </Body>
      </Item>
      <Item onClick={handleCreativeToggle}>
        <Header isActive={CreativeIsActive}>크리에이티브</Header>
        <Body isActive={CreativeIsActive}>
          <a href="/courses/creative">ALL</a>
          <a href="/courses/creative/3d-modeling">CAD · 3D 모델링</a>
          <a href="/courses/creative/web-publishing">웹 퍼블리싱</a>
          <a href="/courses/creative/ux-ui">UX/UI</a>
          <a href="/courses/creative/graphic-design">그래픽 디자인</a>
          <a href="/courses/creative/design-tool">디자인 툴</a>
          <a href="/courses/creative/video-editing">사진 · 영상</a>
          <a href="/courses/creative/vr-ar">VR/AR</a>
          <a href="/courses/creative/sound">사운드</a>
          <a href="/courses/creative/creative-besides">기타</a>
        </Body>
      </Item>
      <Item onClick={handleBusinessToggle}>
        <Header isActive={BusinessIsActive}>직무 · 마케팅</Header>
        <Body isActive={BusinessIsActive}>
          <a href="/courses/business">ALL</a>
          <a href="/courses/business/office">오피스</a>
          <a href="/courses/business/marketing">마케팅</a>
          <a href="/courses/business/project-manage">기획 · 전략 · PM</a>
          <a href="/courses/business/task-automation">업무 자동화</a>
          <a href="/courses/business/finance-management">금융 · 경영</a>
          <a href="/courses/business/business-besides">기타</a>
        </Body>
      </Item>
      <Item onClick={handleAcademicsToggle}>
        <Header isActive={AcademicsIsActive}>학문 · 외국어</Header>
        <Body isActive={AcademicsIsActive}>
          <a href="/courses/academics">ALL</a>
          <a href="/courses/academics/math">수학</a>
          <a href="/courses/academics/foreign-language">외국어</a>
          <a href="/courses/academics/academic-besides">기타</a>
        </Body>
      </Item>
      <Item onClick={handleCareerToggle}>
        <Header isActive={CareerIsActive}>커리어</Header>
        <Body isActive={CareerIsActive}>
          <a href="/courses/career">ALL</a>
          <a href="/courses/career/get-jobs">취업 · 이직</a>
          <a href="/courses/career/personal-branding">개인 브랜딩</a>
          <a href="/courses/career/business-start-up">창업</a>
          <a href="/courses/career/career-besides">기타</a>
        </Body>
      </Item>
      <Item onClick={handleLifeToggle}>
        <Header isActive={LifeIsActive}>교양</Header>
        <Body isActive={LifeIsActive}>
          <a href="/courses/life">ALL</a>
          <a href="/courses/life/lifestyle">교양</a>
        </Body>
      </Item>
    </>
  );
};

const Filter = () => {
  return (
    <FilterWrap>
      <FilterItem>
        <FilterHeader>난이도</FilterHeader>
        <FilterBody>
          <FilterBox>
            <input type="checkbox" id="level_1" />
            <label for="level_1">입문</label>
          </FilterBox>
          <FilterBox>
            <input type="checkbox" id="level_2" />
            <label for="level_2">초급</label>
          </FilterBox>
          <FilterBox>
            <input type="checkbox" id="level_3" />
            <label for="level_3">중급이상</label>
          </FilterBox>
        </FilterBody>
      </FilterItem>
      <FilterItem>
        <FilterHeader>유료/무료/할인중</FilterHeader>
        <FilterBody>
          <FilterBox>
            <input type="checkbox" id="paid" />
            <label for="paid">유료</label>
          </FilterBox>
          <FilterBox>
            <input type="checkbox" id="free" />
            <label for="free">무료</label>
          </FilterBox>
          <FilterBox>
            <input type="checkbox" id="discount" />
            <label for="discount">할인중</label>
          </FilterBox>
        </FilterBody>
      </FilterItem>
      <FilterItem>
        <FilterHeader>온라인/오프라인</FilterHeader>
        <FilterBody>
          <FilterBox>
            <input type="checkbox" id="online" />
            <label for="online">온라인</label>
          </FilterBox>
          <FilterBox>
            <input type="checkbox" id="offline" />
            <label for="offline">오프라인</label>
          </FilterBox>
        </FilterBody>
      </FilterItem>
    </FilterWrap>
  );
};

const LectureListSidebar = () => {
  return (
    <Container>
      <Category />
      <Filter />
    </Container>
  );
};

export default LectureListSidebar;

const Container = styled.div`
    width: 20%;
`;

// Category Component - styled

const Item = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: 4px;
  font-size: 1rem;
`;

const Title = styled.div`
  border: 1px solid #e4e4e4;
  color: #595959;
  background: #fafafa;
  font-weight: 500;
  display: inline-flex;
  padding: 0.85rem;
  border-radius: 0;
  white-space: nowrap;
  align-items: center;
  justify-content: space-between;
  line-height: 1.25;
  position: relative;
`;
const Header = styled(Title)`
  &::after {
    content: "";
    margin-top: 2px;
    margin-left: 0.65rem;
    display: inline-block;
    border: solid #595959;
    border-width: 0 2px 2px 0;
    padding: 2.5px;
    transform: ${(props) =>
      props.isActive ? "rotate(45deg)" : "rotate(-45deg)"};
    transition: transform 0.2s;
  }
`;
const Body = styled.div`
  color: #595959;
  background: #fff;
  border: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  max-height: ${(props) => (props.isActive ? "100em" : 0)};
  overflow-y: hidden;
  border-radius: 4px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  transition: max-height 0.2s ease;

  a {
    display: inline-flex;
    text-decoration: none;
    width: 100%;
    white-space: nowrap;
    cursor: pointer;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #e4e4e4;
    border-right: 1px solid #e4e4e4;
    border-left: 1px solid #e4e4e4;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    font-size: 0.925rem;
    box-sizing: border-box;
    line-height: 1.5;
  }
`;

// Filter Component - styled

const FilterWrap = styled.div`
  border-top: 1px solid #e4e4e4;
  margin-top: 1rem;
  padding: 0 1rem 1rem;
`;

const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: 4px;
  font-size: 1rem;
`;

const FilterHeader = styled.div`
  font-weight: 700;
  border: 0;
  border-bottom: 1px solid #e4e4e4;
  background: #fff;
  color: #595959;
  display: inline-flex;
  padding: 0.85rem;
  border-radius: 0;
  white-space: nowrap;
  text-decoration: none;
`;

const FilterBody = styled.div`
  padding: 5px 0;
  color: #595959;
  background: #fff;
  border: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  max-height: 100em;
`;

const FilterBox = styled.div`
    border: 0;
    height: 35px;
    display: inline-flex;
    text-decoration: none;
    width: 100%;
    white-space: nowrap;
    cursor: pointer;
    align-items: center;
    background: #fff;  
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    font-size: .925rem;
    box-sizing: border-box;
    color: #787878;
    margin-left: -14px;

`;
