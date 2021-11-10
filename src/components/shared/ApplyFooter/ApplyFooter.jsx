import React from 'react'
import styled from 'styled-components'

const ApplyFooter = ({bgColor, color}) => {
    console.log('Color', bgColor);
    return (
        <Section bgColor={bgColor}>
            <Wrap>
                <Card>
                    <Title color={color}>지식공유자 되기</Title>
                    <Desc color={color}>많은 사람들에게 배움의 기회를 주고,<br/>경제적 보상을 받아보세요.</Desc>
                    <Button>지식공유참여</Button>
                </Card>
                <Card>
                    <Title color={color}>기업 교육을 위한 인프런</Title>
                    <Desc color={color}>“인프런 비즈니스” 를 통해 모든 팀원이 인프런의 강의를<br/>자유롭게 학습하는 환경을 제공하세요.</Desc>
                    <Button>인프런 비즈니스</Button>
                </Card>
            </Wrap>
        </Section>
    )
}

export default ApplyFooter

const Section = styled.section`
    background: ${props => props.bgColor ? props.bgColor : '#303740'};
    border-bottom: 1px solid #212529;
`

const Wrap = styled.div`
    display: flex;
    padding: 96px 0;
    max-width: 1152px;
    margin: 0 auto;
    justify-content: space-around;

`
const Card = styled.div`
    text-align: center;
    font-weight: 400;
    line-height: 1.5;

`

const Title = styled.div`
    color:  ${props => props.color ? props.color : '#fff'};
    font-size: 24px;
    margin-bottom: 8px;

`

const Desc = styled.div`
    color: ${props => props.color ? props.color : '#e9ecef'}; 
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 24px;

`

const Button = styled.a`
    display: inline-block;
    background: #1dc078;
    color: #fff;
    font-size: 20px;
    border-radius: 2px;
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    justify-content: center;
    text-align: center;
    white-space: nowrap;
}

`
