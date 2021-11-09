import React from 'react'
import styled from 'styled-components'
import LectureListContainer from '../components/LectureList/LectureListContainer'
import LectureListSidebar from '../components/LectureList/LectureListSidebar'
import Footer from '../components/shared/Footer/Footer'
import Header from '../components/shared/Header/Header'


const LectureListPage = () => {
    return (
        <div>
            <Header />
            <MainContainer>
                <LectureListSidebar />
                <LectureListContainer />
            </MainContainer>
            <Footer />
        </div>
    )
}

export default LectureListPage

const MainContainer = styled.div`
    display: flex;
    max-width: 1180px;
    margin: 0 auto;
    padding: 2rem 0;
    background: #fff;
`