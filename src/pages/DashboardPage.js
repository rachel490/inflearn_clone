import React from 'react'
import styled from 'styled-components'
import DashboardHeader from '../components/Dashboard/DashboardHeader'
import DashboardSidebar from '../components/Dashboard/DashboardSidebar'
import MainDashboard from '../components/Dashboard/MainDashboard'
import Footer from '../components/shared/Footer/Footer'
import Header from '../components/shared/Header/Header'

const DashboardPage = () => {
    return (
        <div>
            <Header />
            <DashboardHeader />
            <MainContainer>
                <DashboardSidebar />
                <MainDashboard />
            </MainContainer>
            <Footer />
        </div>
    )
}

export default DashboardPage

const MainContainer = styled.div`
`;