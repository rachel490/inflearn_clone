import React from 'react'
import styled from 'styled-components'
import {BsCartPlus, BsHeart,BsPlusLg} from 'react-icons/bs'
import StarRate from '../shared/StarRate/StarRate'

const LectureRecommendation = () => {
    return (
        <Container>
            <Header>
                <Title>장기효(캡틴판교)님의 다른 강의</Title>
                <SubTitle>지식공유자님의 다른 강의를 만나보세요!</SubTitle>
            </Header>
            <Content>
                <List>
                    <Item>
                        <Thumbnail>
                            <img loading="lazy" src="https://cdn.inflearn.com/public/courses/326082/cover/c6519e92-f334-46ac-8a31-6290db19b32a" data-src="https://cdn.inflearn.com/public/courses/326082/cover/c6519e92-f334-46ac-8a31-6290db19b32a"  alt="image" />
                        </Thumbnail>
                        <InfoWrap>
                            <Info>
                                <Name>실전 프로젝트로 배우는 타입스크립트</Name>
                                <Tags>
                                    <Tag>TypeScript</Tag>
                                    <Tag>Front-End</Tag>
                                    <Tag>ES6</Tag>
                                </Tags>
                                <Rate>
                                    <StarRate rate={5}/>
                                    <ReviewNum>90</ReviewNum>
                                </Rate>
                            </Info>
                            <PriceWrap>
                                <Price>
                                    <span>₩55,000</span>
                                </Price>
                                <Buttons>
                                    <BsCartPlus />
                                    <BsHeart />
                                    <BsPlusLg />
                                </Buttons>
                            </PriceWrap>
                        </InfoWrap>
                    </Item>
                </List>
            </Content>
        </Container>
    )
}

export default LectureRecommendation

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0  54px;
`