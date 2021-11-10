import React from "react";
import styled from "styled-components";
import KaKaoLogin from './Header/KaKaoLogin';
import GoogleLogin from './Header/GoogleLogin';

const SocialLogin = () => {
  return (
    <SocialLoginContainer>
      <hr />
      <Text>간편로그인</Text>
      <SocialLoginWrap>
        <KaKaoLogin />
        <GoogleLogin />
      </SocialLoginWrap>
    </SocialLoginContainer>
  );
};

export default SocialLogin;

const SocialLoginWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  hr {
    position: relative;
    bottom: -8px;
    display: block;
    margin: 0;
    width: 100%;
    height: 1px;
    background-color: #f1f3f5;
    border: none;
  }
`;

const Text = styled.span`
  padding: 0 8px;
  margin-bottom: 16px;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: -0.3px;
  color: #abb0b5;
  z-index: 11;
  background-color: #fff;
  width: 50px;
`;