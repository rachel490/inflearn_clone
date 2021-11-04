import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BsPlayCircle, BsStarFill } from 'react-icons/bs';
import { MdNavigateNext } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';
import { FaCrown, FaHashtag } from 'react-icons/fa';

const LectureDetailHeader = () => {
  // useEffect(()=> {
  //   axios.get('https://dev.jkrising.shop/inflearn/lectures/1/header')
  //   .then((response) => {console.log(response)})
  //   .catch(err => console.log(err))
  // },[])

  return (
    <ContainerWrap>
      <Container>
        <LeftContainer>
          <ImgWrap>
            <Img
              src='https://cdn.inflearn.com/public/courses/326354/cover/1d6f78c0-86a5-4585-b7f5-49d57582e964'
              alt='lecture-thumbnail'
            />
          </ImgWrap>
          <PreviewButtonWrap>
            <PreviewButton>
              <icon>
                <BsPlayCircle />
              </icon>
              <p>
                <span>12개</span> 무료보기
              </p>
            </PreviewButton>
          </PreviewButtonWrap>
        </LeftContainer>
        <RightContainer>
          <span className='field'>
            커리어 <MdNavigateNext /> 취업 · 이직
          </span>
          <h1 className='title'>
            비전공자를 위한 개발자 취업 올인원 가이드 [통합편]
          </h1>
          <div className='info'>
            <span className='info_rate'>
              <BsStarFill color='#FFC807' />
              <BsStarFill color='#FFC807' />
              <BsStarFill color='#FFC807' />
              <BsStarFill color='#FFC807' />
              <BsStarFill color='#FFC807' />
              <strong>(4.9)</strong>
            </span>
            <span>68개의 수강평&nbsp;∙&nbsp;</span>
            <span>
              <strong>1118명</strong>의 수강생
            </span>
          </div>
          <div className='instructor'>
            <BiUser className='user_icon' />
            한정수
            <FaCrown className='crown_icon' />
          </div>
          <div className='tag'>
            <FaHashtag className='hash_icon' />
            <button>취업</button>
            <button>면접</button>
            <button>포트폴리오</button>
          </div>
        </RightContainer>
      </Container>
    </ContainerWrap>
  );
};

export default LectureDetailHeader;

const ContainerWrap = styled.div`
  background-color: #002333;
  padding: 40px 0;
`;

const Container = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1200px;
  display: flex;
  align-items: center;
`;

const LeftContainer = styled.div`
  position: relative;
`;

const ImgWrap = styled.div`
  position: relative;
  overflow: hidden;
  width: 440px;
  height: 286px;
  border-radius: 8px;
`;

const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const PreviewButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
`;

const PreviewButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  line-height: 1.47;
  letter-spacing: -0.3px;
  font-size: 15px;
  max-width: 400px;
  width: 100%;
  height: 40px;
  border: 2px solid #00c471;
  border-radius: 4px;
  color: #fff;
  font-weight: 700;
  background: #1b1c1d;
  cursor: pointer;

  icon {
    margin-right: 8px;
    display: flex;
    align-items: center;
  }

  span {
    color: #00c471;
    margin-right: 4px;
  }
`;

const RightContainer = styled.div`
  padding: 0 42px 0 24px;
  color: #fff;

  span {
    line-height: 1.43;
    letter-spacing: -0.3px;
    font-size: 14px;
    color: #fff;
    font-weight: 500;
  }

  strong {
    font-weight: 700;
  }

  .title {
    margin-bottom: 40px;
    line-height: 1.5;
    letter-spacing: -0.3px;
    color: #fff;
    font-weight: 700;
    font-size: 26px;
  }

  .info {
    margin-bottom: 8px;

    .info_rate {
      margin-right: 8px;
    }
  }

  .instructor {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 8px;
    text-decoration: underline;

    .crown_icon,
    .user_icon {
      margin-right: 6px;
      width: 16px;
      height: 16px;
    }

    .crown_icon {
      margin-left: 2px;
    }
  }

  .tag {
    display: flex;
    align-items: center;
    button {
      line-height: 1.5;
      letter-spacing: -0.3px;
      font-size: 12px;
      margin-right: 4px;
      padding: 4px 12px;
      border-radius: 100px;
      background-color: #173f51;
      color: #fff;
      font-weight: 500;
      border: none;
    }

    .hash_icon {
      margin-right: 6px;
      width: 16px;
      height: 16px;
    }
  }
`;
