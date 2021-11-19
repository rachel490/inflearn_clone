import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import { API } from "../../config";
import PostItem from "./PostItem";

const QuestionContent = () => {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    const fetchQuesitons = async () => {
      const response = await Axios.get(API.QUESTION);
      console.log('qa', response);
      const data = response.data.result;
      setQuestions(data);
    };

    fetchQuesitons();
  }, []);

  return (
    <Wrap>
        {questions && questions.map(item => <PostItem data={item} type='답변' />)}
    </Wrap>
  );
};

export default QuestionContent;

const Wrap = styled.div`
  padding: 32px 0 64px;
  max-width: 100%;
  flex: 1 1 728px;
  display: flex;
  flex-direction: column;
`;
