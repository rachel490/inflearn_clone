import React from 'react'
import styled from 'styled-components'
import MentorCard from '../components/Mentoring/MentorCard'

const MentoringPage = () => {
    return (
        <div>
            <MentorContainer>
                <MentorCard />
                <MentorCard />
                <MentorCard />
                <MentorCard />
              
            </MentorContainer>
        </div>
    )
}

export default MentoringPage

const MentorContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
    display: flex;
`
