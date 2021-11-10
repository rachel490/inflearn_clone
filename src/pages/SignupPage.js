import React from "react";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";
import SignUp from "../components/shared/SignUp/SignUp";
import styled from "styled-components";
import SocialLogin from "../components/shared/SocialLogin";

function SignupPage() {
  return (
    <div>
      <Header />
      <SignUpWrap>
        <SignUp />
      </SignUpWrap>
      <Footer />
    </div>
  );
}

export default SignupPage;

const SignUpWrap = styled.div`
  padding: 60px 0;
  min-height: 800px;
`;
