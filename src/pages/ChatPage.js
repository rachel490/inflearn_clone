import React from "react";
import styled from "styled-components";
import ChatContent from "../components/Community/ChatContent";
import CommunityHeader from "../components/Community/CommunityHeader";
import CommunitySidebar from "../components/Community/CommunitySidebar";
import CommunityTagbar from "../components/Community/CommunityTagbar";
import ApplyFooter from "../components/shared/ApplyFooter/ApplyFooter";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";
import LoginedHeader from "../components/shared/Header/LoginedHeader";

const ChatPage = () => {
  const isLoggedIn = localStorage.getItem("jwtToken") ? true : false;
  const tagArr = ["파이썬", "python", "데이콘", "Daycon", "성공", '완성','ios', '코딩', '오타', '머신러닝', '완강'];

  return (
    <div>
      {isLoggedIn ? <LoginedHeader /> : <Header />}
      <MainContent>
        <CommunityHeader
          title="이야기를 나눠요"
          subtitle="62만명의 커뮤니티!! 함께 토론해봐요."
        />
        <MainContainer>
          <CommunitySidebar category="chats" />
          <ChatContent />
          <CommunityTagbar tagArr={tagArr} />
        </MainContainer>
      </MainContent>
      <ApplyFooter bgColor="#f3f4f7" color="#000a12" />
      <Footer />
    </div>
  );
};

export default ChatPage;

const MainContent = styled.div`
  padding-top: 65px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1160px;
`;
