import React from 'react'
import styled from 'styled-components'

const LectureCard = () => {
    return (
        <Container>
            <h1> Course </h1>
            <FrontContainer>
                <ImgSection></ImgSection>
                <ContentSection></ContentSection>

            </FrontContainer>
            {/* <BackContainer>

            </BackContainer> */}
        </Container>
    )
}

export default LectureCard

const Container = styled.a`

`

const FrontContainer = styled.div`

`

const ImgSection = styled.section`
`
const ContentSection = styled.section`

`