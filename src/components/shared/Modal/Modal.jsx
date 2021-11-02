import React from 'react'
import styled from 'styled-components'

function Modal() {
    return (
        <ModalWrap>
            <Dimmed>

            </Dimmed>
        </ModalWrap>
    )
}

export default Modal


const ModalWrap = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 80;
    position: fixed;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
`

const Dimmed = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background: rgba(11,19,30,.37);

`