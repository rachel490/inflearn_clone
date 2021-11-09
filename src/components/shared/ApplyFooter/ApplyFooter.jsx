import React from 'react'
import styled from 'styled-components'

const ApplyFooter = () => {
    return (
        <Section>
            <Wrap>
                <Card>
                    <Title>지식공유자 되기</Title>
                    <Desc>많은 사람들에게 배움의 기회를 주고,<br/>경제적 보상을 받아보세요.</Desc>
                    <Button>지식공유참여</Button>
                </Card>
                <Card>
                    <Title>기업 교육을 위한 인프런</Title>
                    <Desc>“인프런 비즈니스” 를 통해 모든 팀원이 인프런의 강의를<br/>자유롭게 학습하는 환경을 제공하세요.</Desc>
                    <Button>인프런 비즈니스</Button>
                </Card>
            </Wrap>
        </Section>
    )
}

export default ApplyFooter

const Section = styled.section`
    background: #303740;
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

`

const Title = styled.div`
    color: #fff;
    font-size: 24px;
    margin-bottom: 8px;

`

const Desc = styled.div`
    color: #e9ecef; 
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 24px;

`

const Button = styled.a`
    display: block;
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
