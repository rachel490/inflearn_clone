import React from 'react'
import {FaRegStar} from 'react-icons/fa'
import styled from 'styled-components'

const StarRate = ({rate}) => {
    console.log('rate', rate);
    return (
        <Container >
            <BaseStar className="stars-background">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </BaseStar>
            <FillStar className="stars-real" rate= {rate}>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </FillStar>
        </Container>
    )
}

export default StarRate

const Container = styled.div`
    color: #aaa9a9; 
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

`

const FillStar = styled.div`
    color: #fff58c;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: flex;
    top: 0;
    overflow: hidden;
    -webkit-text-fill-color: gold;
    width: ${props => props.rate/5*80}px;
`