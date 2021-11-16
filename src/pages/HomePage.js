import React from "react";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import LectureCard from "../components/shared/LectureCard/LectureCard";
import LoginedHeader from "../components/shared/Header/LoginedHeader";
import LoggedInHome from "../components/Home/LoggedInHome";
import LoggedOutHome from "../components/Home/LoggedOutHome";

const dummy = {
  LECTURE_ID: 1,
  LECTURE_NAME: "스프링 핵심 원리 - 고급편",
  TITLE_IMAGE:
    "https://cdn.inflearn.com/public/courses/327901/cover/d0f80fce-6877-4058-91bb-dc1ef57339a2/327901-eng.png",
  INTRO_BODY:
    "스프링의 핵심 원리와 고급 기술들을 깊이있게 학습하고, 스프링을 자신있게 사용할 수 있습니다.",
  STAR_POINT: 4.2,
  SALE_PERCENT: 30,
  PRICE: 121000,
  NICK_NAME: "조준기",
  LEARNING_LEVEL: 2,
  BIG_CATEGORY_NAME: "개발•프로그래밍",
  MIDDLE_CATEGORY_NAME: ["백엔드", "웹 개발"],
  TAG: ["Back-End", "Spring", "디자인패턴"],
};

const HomePage = () => {
  const isLoggedIn = localStorage.getItem('jwtToken') ? true : false;
  return (
    <div>
      { isLoggedIn ? <LoginedHeader /> :  <Header /> }
      { isLoggedIn ? <LoggedInHome /> :  <LoggedOutHome /> }
      <Footer />
    </div>
  );
};

export default HomePage;

