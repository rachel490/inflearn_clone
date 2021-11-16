import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import LectureCard from "../shared/LectureCard/LectureCard";
import PreviewLectureCard from "../shared/LectureCard/PreviewLectureCard";
import { API } from "../../config";
import Axios from "axios";

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

const LoggedOutHome = () => {
  const [newLecture, setNewLecture] = useState();
    useEffect(() => {
      const fetchNewLecture = async () => {
        const response = await Axios.get(API.NEW_LECTURES);
        const data = response.data.result;
        console.log('new lectures',data)
        setNewLecture(data);
      }
      
      fetchNewLecture();
    }, []);
  return (
    <MainContainer>
      <HeroSection>
        <img
          class="banner-pc-image"
          src="https://cdn.inflearn.com/public/main_sliders/68a15e47-7f40-444c-af73-60ab1acb8b3f/%5B%EB%B8%8C%EB%9E%9C%EB%93%9C%5D%EC%B1%84%EC%9A%A9%EC%9D%B4%EB%AF%B8%EC%A7%80%26%EA%B4%91%EA%B3%A0%EB%A6%AC%EB%89%B4%EC%96%BC_main_521.gif"
          alt="함께 성장할 동료를 찾아요 🌿"
        />
      </HeroSection>
      <SearchSection>
        <SearchContent>
          <h1 class="title is-4">인프런에서 연봉을 올리세요</h1>
          <Searchbar>
            <input
              class="input e_search_input"
              type="text"
              placeholder="배우고 싶은 지식을 입력해보세요."
            />
            <button>
              <BsSearch />
            </button>
          </Searchbar>
        </SearchContent>
      </SearchSection>
      <TagSection>
        <TagContent>
          <span>
            <a href="/tag-curation/skill/216">#MVC</a>
          </span>
          <span>
            <a href="/tag-curation/skill/218">#Spring Boot</a>
          </span>
          <span>
            <a href="/tag-curation/skill/51">#Back-End</a>
          </span>
          <span>
            <a href="/tag-curation/skill/216">#MVC</a>
          </span>
          <span>
            <a href="/tag-curation/skill/218">#Spring Boot</a>
          </span>
          <span>
            <a href="/tag-curation/skill/51">#Back-End</a>
          </span>
        </TagContent>
      </TagSection>
      <LectureSection>
        <LectureContent>
          <SectionHeader>
            <h1>여기서 시작해 보세요!</h1>
            <p>이미 검증된 쉽고 친절한 입문 강의!!</p>
          </SectionHeader>
          <SectionContent>
            <LectureCard data={dummy} />
            <LectureCard data={dummy} />
            <LectureCard data={dummy} />
            <LectureCard data={dummy} />
            <LectureCard data={dummy} />
          </SectionContent>
        </LectureContent>
      </LectureSection>
      <LectureSection>
        <LectureContent>
          <SectionHeader>
            <h1>따끈따끈, 신규 강의를 만나보세요! 🙋🏻‍♀️</h1>
          </SectionHeader>
          <SectionContent>
            {
                newLecture && newLecture.map(item => <PreviewLectureCard data={item} size='small'/> )
            }
          </SectionContent>
        </LectureContent>
      </LectureSection>
      <LectureSection>
        <LectureContent>
          <SectionHeader>
            <h1>기본부터 실무까지 제시해주는 로드맵 🏃🏻‍♀️</h1>
            <p>아무것도 몰라도 따라오다 보면 전문가가 될 수 있어요!</p>
          </SectionHeader>
          <SectionContent>
            <LectureCard data={dummy} />
            <LectureCard data={dummy} />
            <LectureCard data={dummy} />
            <LectureCard data={dummy} />
            <LectureCard data={dummy} />
          </SectionContent>
        </LectureContent>
      </LectureSection>
      <LectureSection>
        <LectureContent>
          <SectionHeader>
            <h1>여기서 시작해 보세요!</h1>
            <p>이미 검증된 쉽고 친절한 입문 강의!!</p>
          </SectionHeader>
          <SectionContent>
            <LectureCard data={dummy} />
            <LectureCard data={dummy} />
            <LectureCard data={dummy} />
            <LectureCard data={dummy} />
            <LectureCard data={dummy} />
          </SectionContent>
        </LectureContent>
      </LectureSection>
    </MainContainer>
  );
};

export default LoggedOutHome;

const MainContainer = styled.div`
  padding-top: 65px;
`;

const HeroSection = styled.section`
  background-color: #00c471;
  width: 1440px;
  height: 320px;

  img {
    height: 100%;
  }
`;

const SearchSection = styled.section`
  padding-top: 48px;
  padding-bottom: 24px; ;
`;

const SearchContent = styled.div`
  max-width: 1200px;
  padding: 0 10px;
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 400;
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
`;

const Searchbar = styled.div`
  position: relative;
  max-width: 580px;
  width: 100%;
  position: relative;

  input {
    border: none;
    background-color: rgba(29, 192, 120, 0.12);
    border: 1 px solid rgba(29, 192, 120, 0.24);
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
    padding: 14px 20px;
    border-radius: 28px;
    height: auto;
    transition: all 0.2s ease;
    width: 100%;
    text-align: center;
  }

  button {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    background-color: inherit;
    border: unset;
    outline: none;
  }
`;

const TagSection = styled.section`
  margin-top: -18px;
  padding-bottom: 24px;
`;

const TagContent = styled.div`
  max-width: 580px;
  width: 100%;
  margin: 0 auto;

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1.5;
    letter-spacing: -0.3px;
    font-size: 12px;
    margin: 4px;
    padding: 0 12px;
    height: 28px;
    color: #3e4042;
    font-weight: 500;
    border-radius: 20px;
    background: #f1f3f5;

    a {
      line-height: 1.5;
      letter-spacing: -0.3px;
      font-size: 12px;
    }
  }
`;

const LectureSection = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
`;

const LectureContent = styled.div`
  max-width: 1200px;
  padding: 0 10px;
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
`;

const SectionHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: space-between;
  margin-bottom: 16px;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    line-height: 1.5;
    margin-top: 4px;
    font-weight: 600;
  }

  span {
    font-weight: 400;
    color: #757575;
    font-size: 0.9375rem;
  }
`;

const SectionContent = styled.div`
  display: flex;
`;
