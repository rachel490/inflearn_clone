import React from "react";
import styled from "styled-components";
import LectureDetailCurriculum from "../components/LectureDetail/LectureDetailCurriculum";
import LectureDetailHeader from "../components/LectureDetail/LectureDetailHeader";
import LectureDetailInstructor from "../components/LectureDetail/LectureDetailInstructor";
import LectureDetailReview from "../components/LectureDetail/LectureDetailReview";
import LectureDetailSidebar from "../components/LectureDetail/LectureDetailSidebar";
import LectureRecommendation from "../components/LectureDetail/LectureRecommendation";
import ApplyFooter from "../components/shared/ApplyFooter/ApplyFooter";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";
import LectureDetailContent from "../components/LectureDetail/LectureDetailContent";
import LoginedHeader from "../components/shared/Header/LoginedHeader";

const LectureDetailDate = () => {
  return (
    <Wrap>
      <Container>
        <span>
          강의 게시일 : 2021년 08월 12일 (마지막 업데이트일 : 2021년 08월 16일)
        </span>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
margin-top: 20px;
  margin-bottom: 64px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 14px 0;
  border-radius: 4px;
  background-color: #f8f9fa;

  span {
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: -0.3px;
    font-size: 14px;
    color: #868e96;
  }
`;

const LectureDetailPage = () => {
  const isLoggedIn = localStorage.getItem('jwtToken') ? true : false;
  return (
    <div>
       { isLoggedIn ? <LoginedHeader /> :  <Header /> }
      <MainContainer>
        <LectureDetailHeader />
        <MainWrap>
          <ColWrap>
            <LectureDetailContent />
            <LectureDetailInstructor />
            <LectureDetailCurriculum />
            <LectureDetailDate />
            <LectureDetailReview />
          </ColWrap>
          <LectureDetailSidebar />
        </MainWrap>
        <LectureRecommendation />
      </MainContainer>
      <ApplyFooter />
      <Footer />
    </div>
  );
};

export default LectureDetailPage;

const MainContainer = styled.div`
  padding-top: 66px;
`;

const MainWrap = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1200px;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;

`;

const ColWrap = styled.div`
  width: 66%;
  padding: 48px 16px 0 34px;
  width: 100%;
  max-width: 720px;
  box-sizing: border-box;
`;
