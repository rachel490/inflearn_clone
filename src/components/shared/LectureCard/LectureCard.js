import React from 'react'
import styled from 'styled-components'
import StarRate from '../StarRate/StarRate'

const LectureCard = () => {
    return (
        <Container>
            <FrontContainer>
                <ImgSection>
                    <img src="https://cdn.inflearn.com/public/courses/324145/course_cover/f4b28e4f-6635-4e57-95be-5f4ac7b1ea49/I_O_python_1.png" alt="thumbnail" />
                </ImgSection>
                <ContentSection>
                    <Title>프로그래밍 시작하기 : 파이썬 입문 (Inflearn Original)</Title>
                    <Name>인프런</Name>
                    <Rate>
                        <StarRate rate={3}/>
                        <Review>(451)</Review>
                    </Rate>
                    <Price>
                        <OriginalPrice>₩55,000</OriginalPrice>
                        <DiscountPrice>₩38,500</DiscountPrice>
                    </Price>
                    <TagContainer>
                        <Tag bgColor="hsl(182,75%,94%)">+10400명</Tag>
                        <Tag bgColor='hsl(1,100%,89%)'>할인중</Tag>
                    </TagContainer>
                </ContentSection>

            </FrontContainer>
            {/* <BackContainer>

            </BackContainer> */}
        </Container>
    )
}

export default LectureCard

const Container = styled.a`
    display: block;
    width: 231.2px;
    margin-right: 6px;

`

const FrontContainer = styled.div`

`

const ImgSection = styled.section`
width: inherit;

    img{
        width: 100%;
    }
`

const ContentSection = styled.section`
    display: flex;
    flex-direction: column;
`
const Title = styled.h4`
    flex: 1 1 auto;
    font-weight: 700;
    margin-bottom: 0;
    line-height: 1.5em;
    height: 3rem;
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: pre-wrap;

`
const Name = styled.span`
    color: #7d7d7d;
    font-size: .9rem;

`
const Rate = styled.div`
    display: flex;
    algin-items: center;
    padding-top: 0.5rem;
`
const Review = styled.span`
    display: flex;
    align-items: center;
    font-size: .5rem;
    bottom: 0.3rem;
    color: #4a4a4a;

`
const Price = styled.div`
padding-top: 0.5rem;

`
const OriginalPrice = styled.span`
    color: #595959;
    font-weight: 500;
    font-size: .9rem;
    opacity: .75;

`
const DiscountPrice = styled.span`
    margin-left: 0.25rem;
    font-weight: 700;
    color: #175cbe;

`
const TagContainer = styled.div`
    padding-top: 0.5rem;


`
const Tag = styled.div`
    align-items: center;
    background-color: ${props => props.bgColor};
    border-radius: 4px;
    color: #454545;
    display: inline-flex;
    font-size: .75rem;
    height: 2em;
    justify-content: center;
    line-height: 1.5;
    padding-left: 0.75em;
    padding-right: 0.75em;
    white-space: nowrap;
    margin-right: 0.5rem;

`