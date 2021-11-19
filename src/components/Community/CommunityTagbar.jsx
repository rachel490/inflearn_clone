import React from "react";
import styled from "styled-components";

const CommunityTagbar = ({ tagArr }) => {
  return (
    <Wrap>
      <Container>
        <Title>인기 태그</Title>
        <TagList>
            {tagArr.map(item => <TagItem name={item}/>)}
        </TagList>
      </Container>
    </Wrap>
  );
};

export default CommunityTagbar;

const Wrap = styled.div`
  flex: 1 1 196px;
  margin-left: 40px;
  max-width: 196px;
`;

const Container = styled.div`
  margin-top: 32px;
  padding: 16px 8px 16px 12px;
  border: 1px solid #dee2e6;
  background-color: #fff;
  border-radius: 4px;
`;

const Title = styled.h5`
  margin-bottom: 16px;
  height: 20px;
  line-height: 1.43;
  font-size: 14px;
  font-weight: 500;
  color: #616568;
  letter-spacing: -0.3px;
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const TagItem = ({name}) => {
  return (
    <TagItemContainer>
      <Button>
        <span className="hashtag">#</span>
        <span className="name">{name}</span>
      </Button>
    </TagItemContainer>
  );
};

const TagItemContainer = styled.li`
  margin: 0 4px 10px 0;
`;

const Button = styled.button`
  font-weight: 500;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  line-height: 1.38;
  font-size: 13px;
  width: fit-content;
  height: 26px;
  border: none;
  white-space: nowrap;
  color: #3e4042;
  padding: 4px 8px;
  background-color: #eff3fa;
`;
