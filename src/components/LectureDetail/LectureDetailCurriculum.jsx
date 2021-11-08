import React from 'react'
import styled from 'styled-components'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsPlayCircle } from "react-icons/bs";

const AccordionItem = () => {
    return (
        <ItemContainer>
            <ItemHeader>
                <span className="isClose"><IoIosArrowDown/></span>
                <span className="isOpen"><IoIosArrowUp/></span>
                <span className="title">섹션 0. Nuxt.js 소개</span>
                <span className="info">8강  ∙  30분</span>
            </ItemHeader>
            <ItemList>
                <ItemContent>
                    <a href="#">
                        <BsPlayCircle className="lecture_icon"/>
                        <span className="lecture_title">Nuxt.js 강의 소개</span>
                        <span className="lecture_info">
                            <PreviewButton>미리보기</PreviewButton>
                            <Time>02:16</Time>
                        </span>
                    </a>
                </ItemContent>
                <ItemContent>
                    <a href="#">
                        <BsPlayCircle className="lecture_icon"/>
                        <span className="lecture_title">Nuxt.js 강의 소개</span>
                        <span className="lecture_info">
                            <PreviewButton>미리보기</PreviewButton>
                            <Time>02:16</Time>
                        </span>
                    </a>
                </ItemContent>
                <ItemContent>
                    <a href="#">
                        <BsPlayCircle className="lecture_icon"/>
                        <span className="lecture_title">Nuxt.js 강의 소개</span>
                        <span className="lecture_info">
                            <PreviewButton>미리보기</PreviewButton>
                            <Time>02:16</Time>
                        </span>
                    </a>
                </ItemContent>
            </ItemList>
        </ItemContainer>
    )
}

const ItemContainer = styled.div`

`
const ItemHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 20px;
    border-top: 1px solid #f1f3f5;
    border-bottom: 1px solid #f1f3f5;
    background-color: #f8f9fa;
    cursor: pointer;

    .title {
        line-height: 1.47;
        letter-spacing: -.3px;
        font-size: 15px;
        color: #343a40;
        font-weight: 700;
    }

    .info {
        font-weight: 400;
        line-height: 1.47;
        letter-spacing: -.3px;
        font-size: 15px;
        margin-left: auto;
        color: #343a40;
    }

`
const ItemList = styled.div`
max-height: 439px;

`
const ItemContent = styled.div`

    .lecture_title {
        font-weight: 400;
        line-height: 1.47;
        letter-spacing: -.3px;
        font-size: 15px;
        color: #495057;
    }

    .lecture_title {
        display: inline-flex;
        align-items: center;
        margin-left: auto;
        flex-shrink: 0;
    }
`

const PreviewButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    line-height: 1.38;
    letter-spacing: -.3px;
    font-size: 13px;
    margin-left: 8px;
    padding: 0 7px;
    height: 26px;
    border-radius: 4px;
    border: 1px solid #00c471;
    color: #00c471;
    font-weight: 500;
    background-color: transparent;

`

const Time = styled.span`
    font-weight: 400;
    line-height: 1.47;
    letter-spacing: -.3px;
    font-size: 15px;
    margin-left: 16px;
    color: #343a40;
`


const LectureDetailCurriculum = () => {
    return (
        <Container>
            <Header>
                <Title>커리큘럼</Title>
                <SubTitle>총 73개 ˙ 6시간 11분의 수업</SubTitle>
            </Header>
            <Description>
                <span>이 강의는 영상, 수업 노트가 제공됩니다. 미리보기를 통해 콘텐츠를 확인해보세요.</span>
                <button>모두 펼치기</button>
            </Description>
            <ContentAccordion>
                <AccordionItem/>
                <AccordionItem/>
                <AccordionItem/>
            </ContentAccordion>
        </Container>
    )
}

export default LectureDetailCurriculum


const Container = styled.div`
margin-bottom: 8px;

`
const Header = styled.div`
display: flex;
align-items: flex-end;
margin-bottom: 8px;

`
const Title = styled.div`
margin-right: 8px;
 line-height: 1.45;
    letter-spacing: -.3px;
    color: #343a40;
    font-size: 22px;
    font-weight: 700;

`
const SubTitle = styled.div`
line-height: 1.5;
    letter-spacing: -.3px;
    font-size: 16px;
    color: #adb5bd;
    font-weight: 500;

`

const Description = styled.div`
    span {
        font-weight: 400;
        line-height: 1.47;
        letter-spacing: -.3px;
        font-size: 15px;
        margin-right: 12px;
        color: #495057;
        word-break: keep-all;

    }

    button {
        border-color: #dee2e6;
        color: #495057;
        background-color: #fff;
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        line-height: 1.47;
        font-weight: 500;
        cursor: pointer;
        -webkit-appearance: none;
        padding: 0 12px;
        height: 40px;
        line-height: 1.43;
        font-size: 14px;
        letter-spacing: -.3px;
    }

`
const ContentAccordion = styled.div`
overflow: hidden;
border: 1px;
solid #e9ecef;
border-radius: 4px;
`