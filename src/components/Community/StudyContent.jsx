import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import { API } from "../../config";
import PostItem from "./PostItem";

const StudyContent = () => {
  const [study, setStudy] = useState();

  useEffect(() => {
    const fetchstudy = async () => {
      const response = await Axios.get(API.STUDY);
      console.log('study', response);
      const data = response.data.result.result;
      setStudy(data);
    };

    fetchstudy();
  }, []);

  return (
    <Wrap>
        {study && study.map(item => <PostItem data={item} type='댓글' />)}
    </Wrap>
  );
};

export default StudyContent;

const Wrap = styled.div`
  padding: 32px 0 64px;
  max-width: 100%;
  flex: 1 1 728px;
  display: flex;
  flex-direction: column;
`;
