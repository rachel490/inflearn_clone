import React from 'react'
import {BsStar, BsStarFill} from 'react-icons/bs'
import styled from 'styled-components'

const StarRate = ({rate}) => {
    return (
        <Container >
            <BaseStar className="stars-background">
                <span><BsStar /></span>
                <span><BsStar /></span>
                <span><BsStar /></span>
                <span><BsStar /></span>
                <span><BsStar /></span>
            </BaseStar>
            <FillStar className="stars-real" rate= {rate}>
                <span><BsStarFill /></span>
                <span><BsStarFill /></span>
                <span><BsStarFill /></span>
                <span><BsStarFill /></span>
                <span><BsStarFill /></span>
            </FillStar>
        </Container>
    )
}

export default StarRate

const Container = styled.div`
    position: relative;
    unicode-bidi: bidi-override;
    width: max-content;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1.3px;
    -webkit-text-stroke-color: #2b2a29;
   
`

const BaseStar = styled.div`
    z-index: 0;
    padding: 0;
    color: #aaa9a9; 

`

const FillStar = styled.div`
    padding: 0;
    position: absolute;
    z-index: 1;
    display: flex;
    top: 0;
    overflow: hidden;
    -webkit-text-fill-color: gold;
    width: ${props => props.rate/5*80}px;

    span {
        color: #FFC807;
    }
`