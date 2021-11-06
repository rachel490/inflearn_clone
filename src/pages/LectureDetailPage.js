import React from 'react'
import styled from 'styled-components'
import LectureDetailHeader from '../components/LectureDetail/LectureDetailHeader'
import LectureDetailSidebar from '../components/LectureDetail/LectureDetailSidebar';
import Header from '../components/shared/Header/Header';

const LectureDetailPage = () => {
    return (
        <div>
            <Header />
            <LectureDetailHeader />
            <MainWrap>
                <LectureDetailSidebar />
            </MainWrap>

        </div>
    )
}

export default LectureDetailPage


const MainWrap = styled.div`
    display: flex;
`