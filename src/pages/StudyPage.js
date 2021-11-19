import React from "react";
import styled from "styled-components";
import CommunityHeader from "../components/Community/CommunityHeader";
import CommunitySidebar from "../components/Community/CommunitySidebar";
import CommunityTagbar from "../components/Community/CommunityTagbar";
import StudyContent from "../components/Community/StudyContent";
import ApplyFooter from "../components/shared/ApplyFooter/ApplyFooter";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";
import LoginedHeader from "../components/shared/Header/LoginedHeader";

const StudyPage = () => {
  const isLoggedIn = localStorage.getItem("jwtToken") ? true : false;
  const tagArr = ['알고리즘', '자바스크립트', 'javascript', 'java', '스터디', '코딩테스트', '프론트엔드', '백엔드', '스프링', '모각코', '리액트', '자바', '코테'];
  return (
    <div>
      {isLoggedIn ? <LoginedHeader /> : <Header />}
      <MainContent>
        <CommunityHeader
          title="함께 성장할 스터디를 모집해보세요"
          subtitle="강의 수강에서 더 나아가 함께 스터디까지!"
        />
        <MainContainer>
          <CommunitySidebar category="studies" />
          <StudyContent />
          <CommunityTagbar tagArr={tagArr}/>
        </MainContainer>
      </MainContent>
      <ApplyFooter bgColor="#f3f4f7" color="#000a12"/>
      <Footer />
    </div>
  );
};

export default StudyPage;

const MainContent = styled.div`
  padding-top: 65px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1160px;
`;
