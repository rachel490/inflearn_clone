import React from 'react'
import styled from 'styled-components'
import {BsStarFill,BsChevronRight} from 'react-icons/bs'

const MentorCard = () => {
    return (
        <Container>
            <Body>
                <ImgWrap>
                    <img class="is-rounded" src="https://cdn.inflearn.com/public/users/thumbnails/104234/87c344bd-11a9-44b6-a381-813682910fae" alt="멘토 이미지" />
                </ImgWrap>
                <Rate>
                    <BsStarFill />
                    <span className="actual_rate">4.9</span>
                    <span className="base_rate">/5</span>
                    <BsChevronRight />
                </Rate>
                <Info>
                    <Title>보다 괜찮은 개발자 커리어 & 공부법 & 첨삭</Title>
                    <Name>by.Kyle</Name>
                </Info>
            </Body>
            <Bottom>
                <Buttons>
                    <ProfileButton>프로필</ProfileButton>
                    <InfoButton>내용 보기</InfoButton>
                </Buttons>

            </Bottom>
        </Container>
    )
}

export default MentorCard


const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    border-radius: 4px;
    box-shadow: 0 8px 18px -5px rgb(23 39 75 / 5%);
    border: 1px solid #e9ece;   
`

const Body = styled.div`
    padding: 1.5rem;
    margin-bottom: 5rem;


`

const ImgWrap = styled.div`
width: 60px;

img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

`

const Rate = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    display: flex;
    padding: 4px 8px;
    border-radius: 4px;
    background-color: rgba(255,210,77,.2);
    max-width: 78px;
    cursor: pointer;
    color: #f9390f;
    text-align: center;
    align-items: center;

    .actual_rate {
        margin-left: 0.25rem;
        font-size: .75rem;
    }

    .base_rate {
        color: rgba(249,57,15,.48);
    }
`
const Info = styled.div`
    margin-top: 1rem;
`
const Title = styled.div`
    display: -webkit-box;
    font-size: 1rem;
    color: #212529;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -.3px;
    max-height: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: pre-wrap;
`
const Name = styled.div`
    margin-top: 0.25rem;
    font-size: .875rem;
    color: #adb5bd;
`
const Bottom = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
`
const Buttons = styled.div`
`
const ProfileButton = styled.div`
    height: unset;
    margin-right: 0;
    padding: 1rem 0;
    border-radius: 0 0 0.25rem 0.25rem;
    border: solid #f1f3f5;
    border-width: 1px 0 0;
    font-size: 15px;
    color: #000;
    border-right-width: 1px;
    flex: 1;
`
const InfoButton = styled.div`
    height: unset;
    margin-right: 0;
    padding: 1rem 0;
    border-radius: 0 0 0.25rem 0.25rem;
    border: solid #f1f3f5;
    border-width: 1px 0 0;
    font-size: 15px;
    color: #000;
    border-right-width: 1px;
    flex: 1 0 25%;
`

