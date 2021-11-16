import React, { useState, useEffect} from "react";
import styled from "styled-components";
import { Button } from "../style/style";
import Axios from "axios";
import { useHistory } from "react-router";
import SocialLogin from "../SocialLogin";
import {API} from '../../../config';

const SignUp = () => {
  const history = useHistory();
  
  const [Email, setEmail] = useState();
  const [EmailConfirm, setEmailConfirm] = useState();
  const [Password, setPassword] = useState();
  const [PasswordConfirm, setPasswordConfirm] = useState();

  const emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordreg = /^[a-zA-Z0-9]{4,12}$/;

  const check = (re, target) =>{
    if (re.test(target)) {
      return true;
    }
    return false
  };

   const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailConfirm = (e) => {
    setEmailConfirm(e.target.value); 
  };

  const handlePassword = (e) => {
    setPassword(e.target.value); 
  };

  const handlePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!check(emailreg,Email) || !check(passwordreg,Password) || (Email !== EmailConfirm) || (Password !== PasswordConfirm)) {
      return;
    }

    Axios.post(API.SIGN_UP, {
      'email' : Email,
      'password' : Password
    }).then(response => {
      const status_code = response.data.code;
      switch (status_code) {
        case 1000:
          alert('회원가입에 성공하였습니다.');
          history.push('/');
          break;
        case 2000:
          alert('이메일을 입력해주세요.');
          break;
        case 2001:
          alert('비밀번호를 입력해주세요.');
          break;
        case 2004:
          alert('잘못된 아이디 형식입니다.');
          break;
        case 2005:
          alert('이미 가입된 이메일입니다.');
          break;
        case 3000:
          alert('회원가입에 실패하였습니다.')
      }
    })
    .catch(error => alert(`회원가입 실패: ${error}`))
  };



  useEffect(()=> {
    if (Email && !check(emailreg,Email)) {
      document.querySelector('.emailMessage').innerText = '이메일 형식이 올바르지 않습니다.';
    }  else {
      document.querySelector('.emailMessage').innerText = '';
    }

    if (Email != EmailConfirm) {
      document.querySelector('.emailConfirmMessage').innerText = '이메일이 일치하지 않습니다.';
    }  else {
      document.querySelector('.emailConfirmMessage').innerText = '';
    }

    if (!check(passwordreg,Password)) {
      document.querySelector('.passwordMessage').innerText = '비밀번호 형식이 올바르지 않습니다.';
    }  else {
      document.querySelector('.passwordMessage').innerText = '';
    }

    if (Password != PasswordConfirm) {
      document.querySelector('.passwordConfirmMessage').innerText = '비밀번호가 일치하지 않습니다.';
    }  else {
      document.querySelector('.passwordConfirmMessage').innerText = '';
    }
  }, [Email, EmailConfirm, Password, PasswordConfirm])


  return (
    <Container>
      <Header>
        <Title>회원가입</Title>
        <SubTitle>
          <span>나의 온라인 사수, 인프런</span>
        </SubTitle>
      </Header>
      <Form onSubmit={handleSubmit}>
        <InputWrap>
          <Label for="email">이메일</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@inflearn.com"
            value={Email}
            onChange={handleEmail}
          />
          <ValidationMessage className="emailMessage"></ValidationMessage>
        </InputWrap>
        <InputWrap>
          <Label for="emailConfirm">이메일 확인</Label>
          <Input
            id="emailConfirm"
            type="email"
            placeholder="example@inflearn.com"
            value={EmailConfirm}
            onChange={handleEmailConfirm}
          />
          <ValidationMessage className="emailConfirmMessage"></ValidationMessage>
        </InputWrap>
        <InputWrap>
          <Label for="password">비밀번호</Label>
          <Input
            type="password"
            id="password"
            placeholder="******"
            value={Password}
            onChange={handlePassword}
          />
          <ValidationMessage className="passwordMessage"></ValidationMessage>
        </InputWrap>
        <InputWrap>
          <Label for="passwordConfirm">비밀번호 확인</Label>
          <Input
            type="password"
            id="passwordConfirm"
            placeholder="******"
            value={PasswordConfirm}
            onChange={handlePasswordConfirm}
          />
          <ValidationMessage className="passwordConfirmMessage"></ValidationMessage>
        </InputWrap>
        <SignUpButton bgColor="#00c471" onClick={handleSubmit} type="submit">
          가입하기
        </SignUpButton>
      </Form>
      <Footer>
        <span>
          가입 시, 인프런의 &nbsp;
          <a href="https://www.inflearn.com/policy/terms-of-service">
            이용약관
          </a>
          &nbsp; , &nbsp;
          <a href="https://www.inflearn.com/policy/privacy">개인정보취급방침</a>
          에 동의합니다.
        </span>
        <p>
          <input id="allow-marketing" type="checkbox" />
          <label for="allow-marketing">
            인프런의 다양한 소식을 받아보시겠어요?
          </label>
        </p>
      </Footer>
      <SocialLogin />
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  margin: 64px auto auto;
  width: 320px;
  height: 676px;
`;
const Header = styled.div``;
const Title = styled.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 1.5;
`;
const SubTitle = styled.div`
  overflow: hidden;
  margin-bottom: 24px;

  span {
    margin: 0;
    line-height: 1.6;
    font-size: 16px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputWrap = styled.div`
  margin-bottom: 16px;
`;
const Label = styled.label`
  line-height: 1.43;
  letter-spacing: -0.3px;
  font-size: 14px;
  font-weight: 400;
  color: #3e4042;
`;
const ValidationMessage = styled.span`
  line-height: 1.5;
  letter-spacing: -0.3px;
  font-size: 12px;
  font-weight: 400;
  margin-top: 4px;
  color: #e5503c;
`;

const Input = styled.input`
  margin-top: 4px;
  width: 320px;
  padding: 13px 12px;
  height: 48px;
  line-height: 1.47;
  font-size: 15px;
  border: 1px solid #dee2e6;
  letter-spacing: -0.3px;
  border-radius: 4px;
  background-color: #fff;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;

const SignUpButton = styled(Button)`
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 12px;
  padding: 0 16px;
  height: 48px;
  line-height: 1.47;
  font-size: 15px;
  letter-spacing: -0.3px;
  border: 1px solid;
  color: #fff;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  span {
    line-height: 1.5;
    letter-spacing: -0.3px;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 6px;
    color: #858a8d;

    a {
      color: #1964d5;
      text-decoration: none;
      cursor: pointer;
    }
  }

  p {
    display: flex;
    align-items: center;
    font-size: 16px;

    label {
      line-height: 1.5;
      letter-spacing: -0.3px;
      font-size: 12px;
      font-weight: 400;
      margin-left: 4px;
      color: #858a8d;
    }
  }
`;
