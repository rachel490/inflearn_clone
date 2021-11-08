import React from 'react'
import styled from 'styled-components'
import LectureDetailCurriculum from '../components/LectureDetail/LectureDetailCurriculum';
import LectureDetailHeader from '../components/LectureDetail/LectureDetailHeader'
import LectureDetailInstructor from '../components/LectureDetail/LectureDetailInstructor';
import LectureDetailReview from '../components/LectureDetail/LectureDetailReview';
import LectureDetailSidebar from '../components/LectureDetail/LectureDetailSidebar';
import Header from '../components/shared/Header/Header';

const LectureDetailDate = () => {
    return (
        <Wrap>
            <Container>
                <span>강의 게시일 : 2021년 08월 12일 (마지막 업데이트일 : 2021년 08월 16일)</span>
            </Container>
        </Wrap>
    )
}

const Wrap = styled.div`
    margin-bottom: 64px;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 14px 0;
    border-radius: 4px;
    background-color: #f8f9fa;

    span{
        font-weight: 400;
        line-height: 1.43;
        letter-spacing: -.3px;
        font-size: 14px;
        color: #868e96;
    }

`

const LectureDetailPage = () => {
    return (
        <div>
            <Header />
            <LectureDetailHeader />
            <MainWrap>
                <LectureDetailSidebar />
            </MainWrap>
            <LectureDetailInstructor />
            <LectureDetailCurriculum />
            <LectureDetailDate />
            <LectureDetailReview />

        </div>
    )
}

export default LectureDetailPage


const MainWrap = styled.div`
    display: flex;
`