import React from 'react'
import styled from 'styled-components'
import {BiLinkExternal} from 'react-icons/bi'

const LectureDetailInstructor = () => {
    return (
        <Wrap>
            <Container>
                <Header>
                    <Title>
                        안녕하세요
                        <br />
                        <a href='#' >장기효(캡틴판교)<BiLinkExternal/></a>
                        입니다.
                    </Title>
                    <Thumbnail>
                        <img src="https://cdn.inflearn.com/public/users/thumbnails/54224/2bae5879-335e-47d7-9331-31e9bec5e340" alt="장기효(캡틴판교)의 썸네일" />
                    </Thumbnail>
                </Header>
                <Content>
                    <p>
                        인프런에서 5년째 지식을 공유하고 있습니다. 지금까지 많은 응원과 격려를 보내주신 만큼 앞으로도 더 좋은 컨텐츠로 찾아뵙겠습니다. 감사합니다 😄 
                        <a href="https://www.youtube.com/watch?v=fL39Yg2H0ig" target="_blank"><strong>프런트엔드 개발 상담소 바로가기(매주 토요일 오후 9시 30분 유튜브 생방송 진행)</strong></a>
                    </p>
                </Content>
            </Container>
        </Wrap>
    )
}

export default LectureDetailInstructor


const Wrap = styled.div`
margin-bottom: 64px;
`
const Container = styled.div`

`
const Header = styled.div`
margin-bottom: 16px;
display: flex;
align-items: center;
`
const Title = styled.div`
line-height: 1.45;
letter-spacing: -.3px;
color: #212529;
font-size: 22px;
    a{
        margin-right: 4px;
    font-weight: 700;
    text-decoration: underline;
}
    }
`
const Thumbnail = styled.div`
flex-shrink: 0;
overflow: hidden;
margin-left: auto;
width: 64px;
height: 64px;
border-radius: 100%;
border: 1px solid #dee2e6;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const Content = styled.div`
margin-bottom: 64px;

    p{
        line-height: 1.63;
        letter-spacing: -.3px;
        color: #495057;
        font-size: 16px;

        a{
            color: currentColor;
            text-decoration: none;
            cursor: pointer;
                strong {
                    color: #00c471;
                    font-weight: 700;
                }
        }
    }
`
