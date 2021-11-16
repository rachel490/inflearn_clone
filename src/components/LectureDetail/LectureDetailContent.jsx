import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import "./LectureDetailContent.css";
import { API } from "../../config";

const LectureDetailContent = () => {
  // const id = window.location.href.split('course/')[1];
  // console.log('id', id);

  // const [Content,setContent] = useState();

  // const getIntro = () => {
  //     const data = axios.get(API.LECTURE_DETAIL_CONTENT(id)).then(response => setContent(response.data.result.INTRODUCTION))
  // }

  // getIntro ();
  // console.log('content', Content)

  // useEffect(() => {
  //     document.querySelector('.container').innerHTML = Content;
  // },[])

  return (
    <Container>
      <img
        src="https://cdn.inflearn.com/public/files/courses/326694/be67cd95-ce19-4d83-9ba5-9ae4d1c612af/페북마케팅-상세페이지.png"
        alt=""
      />
      <hr />
    </Container>
  );
};

export default LectureDetailContent;

const Container = styled.div`
    img{
        width: 100%;
    }

    hr {
        max-width: 100%;
        width: 100%;
        height: 1px;
        background-color: #e9ecef;
        margin: 42px 0;
        border: none;
        display: block;
      }
`;
