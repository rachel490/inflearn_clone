import React, {useEffect, useState} from "react";
import StarRate from "../shared/StarRate/StarRate";
import { BsDot, BsHeart } from "react-icons/bs";
import styled from "styled-components";
import axios from "axios";
import { API } from "../../config";

const Review = (props) => {
    console.log('props', props.data);
    const  {NICK_NAME, STAR_POINT, REVIEW_COMMENT, PROFILE_IMAGE_URL, CREATED_DATE} = props.data;
  return (
    NICK_NAME ? (
    <ReviewContainer>
      <ReviewHeader>
        <Thumbnail>
          <img
           src="https://cdn.inflearn.com/public/main/profile/default_profile.png"
            alt="민귀홍 thumbnail"
          />
        </Thumbnail>
        <UserInfo>
          <span className="rate">
            <StarRate rate={STAR_POINT} />
            <span className="ratenum">{STAR_POINT}</span>
          </span>
          <p>{NICK_NAME}</p>
        </UserInfo>
      </ReviewHeader>
      <ReviewBody>
        <p>
          {REVIEW_COMMENT}
        </p>
      </ReviewBody>
      <ReviewFooter>
        <Date>{CREATED_DATE}</Date>
        <Like>
          <BsHeart />
          <span>2</span>
        </Like>
      </ReviewFooter>
    </ReviewContainer>
    ) : ''
  );
};

const Reply = () => {
  return (
    <ReviewReply>
      <ReplyHeader>
        <span className="role">지식공유자</span>
        <span className="name">장기효(캡틴판교)</span>
      </ReplyHeader>
      <ReplyBody>
        그쵸 뷰를 어느정도 알고 있으면 nuxt로 시작하는게 오히려 편한 부분이 많은
        것 같아요 ㅋㅋ
      </ReplyBody>
      <ReviewFooter>
        <Date>2021-08-26</Date>
        <Like>
          <BsHeart />
          <span>2</span>
        </Like>
      </ReviewFooter>
    </ReviewReply>
  );
};

const LectureDetailReview = () => {
  const id = window.location.href.split("course/")[1];

  const [Reviews, setReviews] = useState();

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axios.get(API.LECTURE_DETAIL_REVIEW(id));
      const data = response.data.result;
      setReviews(data);
    };

    fetchReviews();
  }, []);
  return (
      Reviews ? (
    <Container>
      <Header>
        <Title>수강평</Title>
        <SubTitle>총 24개</SubTitle>
      </Header>
      <Description>
        수강생분들이 직접 작성하신 수강평입니다. 수강평을 작성 시 300잎이
        적립됩니다.
      </Description>
      <Dashboard>
        <Average>
          <Rate>5.0</Rate>
          <StarRate />
          <ReviewNum>24개의 수강평</ReviewNum>
        </Average>
        <Graph>
          <Row>
            <span>5점</span>
            <progress max="24" value="24"></progress>
          </Row>
          <Row>
            <span>4점</span>
            <progress max="24" value="0"></progress>
          </Row>
          <Row>
            <span>3점</span>
            <progress max="24" value="0"></progress>
          </Row>
          <Row>
            <span>2점</span>
            <progress max="24" value="0"></progress>
          </Row>
          <Row>
            <span>1점</span>
            <progress max="24" value="0"></progress>
          </Row>
        </Graph>
      </Dashboard>
      <List>
        <FitlerBar>
          <span className="title">VIEW</span>
          <span className="divider"></span>
          <span className="like">
            <BsDot />
            좋아요 순
          </span>
          <span className="recent">
            <BsDot />
            최신 순
          </span>
          <span className="high_rate">
            <BsDot />
            높은 평점 순
          </span>
          <span className="low_rate">
            <BsDot />
            낮은 평점 순
          </span>
        </FitlerBar>
        <ReviewContent>
            {Reviews.map(item => <Review data={item} />)}
        </ReviewContent>
      </List>
      <More>
        <MoreButton>수강평 더보기</MoreButton>
      </More>
    </Container>
      ) : 'loading..'
  );
};

export default LectureDetailReview;

const Container = styled.div`
margin-bottom: 56px;
`;
const Header = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: baseline;
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
  font-weight: 400;
  line-height: 1.47;
  letter-spacing: -0.3px;
  font-size: 15px;
  margin-bottom: 16px;
  color: #495057;
`;

const Dashboard = styled.div`
  display: flex;
  height: 180px;
`;

const Average = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #e9ecef;
  flex: 1;
  margin-right: 6px;
`;
const Rate = styled.div`
  margin-bottom: 18px;
  line-height: 1;
  letter-spacing: -0.3px;
  color: #343a40;
  font-size: 36px;
  font-weight: 700;
`;
const ReviewNum = styled.div`
  line-height: 1.47;
  letter-spacing: -0.3px;
  font-size: 15px;
  color: #adb5bd;
  font-weight: 500;
`;
const Graph = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #e9ecef;
  flex: 2;
`;
const Row = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: 400;
    line-height: 1.47;
    letter-spacing: -0.3px;
    font-size: 15px;
    margin-right: 8px;
    flex-shrink: 0;
  }

  progress {
    width: 360px;
    height: 8px;
    border: none;
    background-color: #343a40;
    appearance: none;
    border-radius: 4px;
  }
`;

const List = styled.div`
  margin-top: 44px;
`;

const FitlerBar = styled.div`
    display: flex;
    overflow-x: auto;
    align-items: center;
    padding: 0 16px 10px;
    border-bottom: 1px solid #495057;
    white-space: nowrap;

    .title {
        line-height: 1.43;
        letter-spacing: -.3px;
        font-size: 14px;
        color: #495057;
        font-weight: 700;
    }

    .divider {
        margin: 0 10px 0 12px;
        width: 1px;
        height: 12px;
        background-color: #dee2e6;
    }

    .like, .recent, .high_rate, .low_rate {
        line-height: 1.43;
        letter-spacing: -.3px;
        font-size: 14px;
        display: inline-flex;
        align-items: center;
        padding: 4px 6px;
        color: #adb5bd;
        font-weight: 500;
        cursor: pointer;
        margin-left: 6px;
    }

}

`;
const ReviewContent = styled.div``;

const ReviewItem = styled.div``;
const ReviewContainer = styled.div`
  padding: 32px 0;
  border-top: 1px solid #f1f3f5;
`;
const ReviewHeader = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
`;
const Thumbnail = styled.div`
  margin-right: 8px;
  flex-shrink: 0;
  overflow: hidden;
  width: 42px;
  height: 42px;
  border-radius: 100%;
  border: 1px solid #e9ecef;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const UserInfo = styled.div`
  flex: 1 1 auto;

  span {
    line-height: 1.47;
    letter-spacing: -0.3px;
    font-size: 15px;
    color: #343a40;
    font-weight: 700;
  }

  p {
    line-height: 1.38;
    letter-spacing: -0.3px;
    font-size: 13px;
    color: #868e96;
    font-weight: 700;
  }

  .rate {
      display: flex;
      align-items: center;
      
      .ratenum {
          margin-left: 5px;
      }
  }
`;
const ReviewBody = styled.div`
  margin-bottom: 12px;
  line-height: 1.6;
  letter-spacing: -0.3px;
  color: #495057;
  font-size: 15px;
  white-space: pre-line;
`;

const ReviewFooter = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;
const Date = styled.span`
line-height: 1.38;
letter-spacing: -.3px;
font-size: 13px;
display: inline-flex;
align-items: center;
color: #adb5bd;
font-weight: 500;
`;
const Like = styled.div`
  font-weight: 400;
  line-height: 1.38;
  letter-spacing: -0.3px;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  color: #adb5bd;
  cursor: pointer;

  span {
    margin-left: 2px;
  }
`;
const ReviewReply = styled.div`
  position: relative;
  margin-top: 24px;
  padding: 14px 16px;
  background-color: #f8f9fa;
`;
const ReplyHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  .role {
    line-height: 1.38;
    letter-spacing: -0.3px;
    font-size: 13px;
    margin-right: 8px;
    padding: 3px 6px;
    border: 1px solid #868e96;
    color: #868e96;
    font-weight: 500;
  }

  .name {
    line-height: 1.38;
    letter-spacing: -0.3px;
    font-size: 13px;
    display: flex;
    align-items: center;
    color: #868e96;
    font-weight: 700;
  }
`;
const ReplyBody = styled.div`
  margin-bottom: 10px;
  line-height: 1.6;
  letter-spacing: -0.3px;
  color: #495057;
  font-size: 15px;
  white-space: pre-line;
  word-break: break-all;
`;
const More = styled.div``;
const MoreButton = styled.div`
  border-color: #dee2e6;
  color: #495057;
  background-color: #fff;
  min-width: 100%;
  padding: 0 12px;
  height: 40px;
  line-height: 1.43;
  font-size: 14px;
  letter-spacing: -0.3px;
  border: 1px solid;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  -webkit-appearance: none;
`;
