import styled from 'styled-components'
import { Button } from '../style/style'

export const HeaderWrap = styled.div`
    height: 64px;
    box-shadow: 0 2px 4px 0 hsl(0deg 0% 81% / 50%);
    background: #fff;
`

export const HeaderContainer = styled.header`
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    display: flex;
`


export const HeaderButton = styled(Button)`
    border: 1px solid #dbdbdb;
    background-color: ${props => props.bgColor}

`


export const NavbarContainer = styled.header`

`

