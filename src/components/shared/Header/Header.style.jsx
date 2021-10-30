import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderWrap = styled.div`
    height: 64px;
    box-shadow: 0 2px 4px 0 hsl(0deg 0% 81% / 50%);
    background: #fff;
`

export const HeaderContainer = styled.header`
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    background-color: black;
    display: flex;
`

export const LogoContainer = styled.div`
   
    background-color:yellow;
`

export const LogoWrap = styled(Link)`
    display: inline-flex;
    align-items: center;
    height: 100%;

    #icon_brand_logo {
        fill: #1dc078;
    }

`

export const NavbarContainer = styled.header`

`

