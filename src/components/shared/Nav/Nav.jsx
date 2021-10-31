import React from 'react'
import { 
    NavItemWrap,
    LinkText,
    NavWrap
} from './Nav.style'

function NavItem({url, text}) {
    return(
        <NavItemWrap to={url}>
            <LinkText>{text}</LinkText>
        </NavItemWrap>
    )
}

function Nav() {
    return (
        <NavWrap>
            <NavItem text='강의' url='/courses'/>
            <NavItem text='로드맵' url='/roadmaps'/>
            <NavItem text='멘토링' url='/mentors'/>
            <NavItem text='커뮤니티' url='/commnuity/questions'/>
            <NavItem text='인프런' url='/inflearn'/>
        </NavWrap>
    )
}

export default Nav
