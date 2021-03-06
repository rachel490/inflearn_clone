import React from 'react'
import styled from 'styled-components'
import LectureListContainer from '../components/LectureList/LectureListContainer'
import LectureListSidebar from '../components/LectureList/LectureListSidebar'
import Footer from '../components/shared/Footer/Footer'
import Header from '../components/shared/Header/Header'
import ApplyFooter from '../components/shared/ApplyFooter/ApplyFooter'
import LoginedHeader from '../components/shared/Header/LoginedHeader'


const LectureListPage = () => {
    const isLoggedIn = localStorage.getItem('jwtToken') ? true : false;
    return (
        <div>
             { isLoggedIn ? <LoginedHeader /> :  <Header /> }
            <MainContainer>
                <LectureListSidebar />
                <LectureListContainer />
            </MainContainer>
            <ApplyFooter bgColor="#f3f4f7" color="#000a12"/>
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
    padding-top: 100px;
`