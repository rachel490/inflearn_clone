import React, { useEffect,useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BsPlayCircle, BsStarFill } from 'react-icons/bs';
import { MdNavigateNext } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';
import { FaCrown, FaHashtag } from 'react-icons/fa';
import StarRate from '../shared/StarRate/StarRate';
import { API } from '../../config';

const LectureDetailHeader = () => {
  const id = window.location.href.split('course/')[1];

  const [Header,setHeader] = useState();

  useEffect(() => {
    const fetchHeader = async () => {
      const response = await axios.get(API.LECTURE_DETAIL_HEADER(id));
      const data = response.data.result;
      setHeader(data);
    }

      fetchHeader();
  }, []);
  
  
  return (
    Header ? (
    <ContainerWrap>
      <Container>
        <LeftContainer>
          <ImgWrap>
            <Img
              src={Header.TITLE_IMAGE}
              alt='lecture-thumbnail'
            />
          </ImgWrap>
          <PreviewButtonWrap>
            <PreviewButton>
              <icon>
                <BsPlayCircle />
              </icon>
              <p>
                <span>{Header.previewCount}개</span> 무료보기
              </p>
            </PreviewButton>
          </PreviewButtonWrap>
        </LeftContainer>
        <RightContainer>
          <span className='field'>
            {Header.category.BIG_CATEGORY_NAME} <MdNavigateNext /> {Header.category.MIDDLE_CATEGORY_NAME}
          </span>
          <h1 className='title'>
            {Header.LECTURE_NAME}
          </h1>
          <div className='info'>
            <span className='info_rate'>
              <StarRate rate={Header.STAR_POINT} />
              <strong>({Header.STAR_POINT})</strong>
            </span>
            <span>68개의 수강평&nbsp;∙&nbsp;</span>
            <span>
              <strong>{Header.studentCount}명</strong>의 수강생
            </span>
          </div>
          <div className='instructor'>
            <BiUser className='user_icon' />
            {Header.NICK_NAME}
            <FaCrown className='crown_icon' />
          </div>
          <div className='tag'>
            <FaHashtag className='hash_icon' />
            {Header.tags.map(tag => <button>{tag.CATEGORY_TAG_NAME}</button>)}
          </div>
        </RightContainer>
      </Container>  
    </ContainerWrap>
    ): 'loading'
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
    display: flex;
    align-items: center;

    .info_rate {
      margin-right: 8px;
      display: flex;
      align-items: center;
       
      strong {
        margin-left: 8px;
      }
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
