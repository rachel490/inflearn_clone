import React from "react";
import styled from "styled-components";

const SettingsTab = () => {
  return (
    <TabContainer>
      <TabList>
        <TabItem>
          <a href="/settings/account">프로필 설정</a>
        </TabItem>
        <TabItem>
          <a href="/settings/notifications">알림 설정</a>
        </TabItem>
      </TabList>
    </TabContainer>
  );
};

export default SettingsTab;

const TabContainer = styled.div`
  margin-bottom: 1.5rem;
  align-items: stretch;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
`;
const TabList = styled.ul`
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: flex-start;
  width: 100%;
`;
const TabItem = styled.li`
  font-size: 0.9rem;

  a {
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    color: #454545;
    display: flex;
    justify-content: center;
    margin-bottom: -1px;
    padding: 0.5em 1em;
    vertical-align: top;
  }
`;
