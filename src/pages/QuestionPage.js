import React from "react";
import styled from "styled-components";
import CommunityHeader from "../components/Community/CommunityHeader";
import CommunitySidebar from "../components/Community/CommunitySidebar";
import CommunityTagbar from "../components/Community/CommunityTagbar";
import QuestionContent from "../components/Community/QuestionContent";
import ApplyFooter from "../components/shared/ApplyFooter/ApplyFooter";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";
import LoginedHeader from "../components/shared/Header/LoginedHeader";

const QuestionPage = () => {
  const isLoggedIn = localStorage.getItem("jwtToken") ? true : false;
  const tagArr = ['질문', '오류', '에러', 'react', 'JPA', '파이썬', '강의자료', 'Vue', 'spring', 'javascript', 'jpa', 'mysql'];
  return (
    <div>
      {isLoggedIn ? <LoginedHeader /> : <Header />}
      <MainContent>
        <CommunityHeader
          title="묻고 답해요"
          subtitle="62만명의 커뮤니티!! 함께 토론해봐요."
        />
        <MainContainer>
          <CommunitySidebar category="questions" />
          <QuestionContent />
          <CommunityTagbar tagArr={tagArr}/>
        </MainContainer>
      </MainContent>
      <ApplyFooter bgColor="#f3f4f7" color="#000a12"/>
      <Footer />
    </div>
  );
};

export default QuestionPage;

const MainContent = styled.div`
  padding-top: 65px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1160px;
`;
