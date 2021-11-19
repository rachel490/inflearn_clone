import React from "react";
import styled from "styled-components";
import { BsHeartFill } from "react-icons/bs";

const PostItem = (props) => {
    const {BOARD_TITLE,BOARD_CONTENT, NICK_NAME, DATE, cnt, LECTURE_NAME} = props.data;
    const type = props.type
  return (
    <Container>
      <Link>
        <Content>
          <MainContent>
            <Title>
              <h3>{BOARD_TITLE}</h3>
            </Title>
            <Body>{BOARD_CONTENT}</Body>
            <Tags>
              <Tag name='javascript'/>
              <Tag name='node'/>
              <Tag name='python'/>
            </Tags>
            <Footer>{NICK_NAME} · {DATE} · {LECTURE_NAME}</Footer>
          </MainContent>
          <SubContent>
            <Comment>
              <Count>{cnt}</Count>
              <Text>{type}</Text>
            </Comment>
            <LikeButton>
              <BsHeartFill className="icon"/>
              8개
            </LikeButton>
          </SubContent>
        </Content>
      </Link>
    </Container>
  );
};

export default PostItem;

const Container = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Link = styled.a`
  color: currentColor;
  text-decoration: none;
  cursor: pointer;
`;
const Content = styled.div`
  display: flex;
  padding: 20px 16px;
  border-bottom: 1px solid #dee2e6;
`;
const MainContent = styled.div`
  flex: 1 1 590px;
  max-width: 590px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  h3 {
    text-align: left;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-right: 9px;
    font-size: 18px;
    font-weight: 700;
    color: #1b1c1d;
    white-space: normal;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const Body = styled.p`
  max-height: 44px;
  color: #616568;
  overflow: hidden;
  font-size: 15px;
  margin: 0;
  line-height: 1.6;
`;
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  margin-top: 12px;
`;
const Footer = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #858a8d;
`;
const SubContent = styled.div`
  flex: 1 1 146px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  max-width: 146px;
`;
const Comment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 66px;
  height: 66px;
  border-radius: 100px;
  border: 1px solid #dee2e6;
`;
const Count = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #1b1c1d;
`;
const Text = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #616568;
  margin-top: .5rem;
`;
const LikeButton = styled.button`
  border: unset;
  background-color: unset;
  color: #495057;
  font-weight: 500;
  cursor: pointer;
  padding: 0 12px;
  height: 40px;
  line-height: 1.43;
  font-size: 14px;
  letter-spacing: -0.3px;
  display: flex;
  align-items:center;

  .icon {
      margin-right: 0.25rem;
  }
`;

const Tag = ({name}) => {
  return (
    <TagContainer>
      <span className="hashtag">#</span>
      <span className="tag-name">{name}</span>
    </TagContainer>
  );
};

const TagContainer = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  -webkit-appearance: none;
  line-height: 1.38;
  font-size: 13px;
  width: fit-content;
  height: 26px;
  border: none;
  white-space: nowrap;
  color: #3e4042;
  padding: 4px 8px;
  margin-right: 8px;
  margin-bottom: 5px;
  background-color: #eff3fa;

  .tag-name {
    margin-bottom: 1px;
  }
`;
