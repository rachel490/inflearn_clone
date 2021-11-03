import React from 'react'
import Footer from '../components/shared/Footer/Footer'
import Header from '../components/shared/Header/Header'
import SignUp from '../components/shared/SginUp/SignUp';
import styled from 'styled-components'


function SignupPage() {
    return (
        <div>
            <Header />
            <SignUpWrap >
                <SignUp />
            </SignUpWrap>
            <Footer />
        </div>
    )
}

export default SignupPage

const SignUpWrap = styled.div`


`