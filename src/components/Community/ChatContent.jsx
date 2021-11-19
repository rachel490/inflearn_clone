import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import { API } from "../../config";
import PostItem from "./PostItem";

const ChatContent = () => {
  const [chats, setChats] = useState();

  useEffect(() => {
    const fetchChats = async () => {
      const response = await Axios.get(API.CHAT);
      console.log('chat', response);
      const data = response.data.result.result;
      setChats(data);
    };

    fetchChats();
  }, []);

  return (
    <Wrap>
        {chats && chats.map(item => <PostItem data={item} type='댓글' />)}
    </Wrap>
  );
};

export default ChatContent;

const Wrap = styled.div`
  padding: 32px 0 64px;
  max-width: 100%;
  flex: 1 1 728px;
  display: flex;
  flex-direction: column;
`;
