import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../style/style';
import axios from 'axios';

const SignUp = () => {
  const [Email, setEmail] = useState('');
  const [EmailConfirm, setEmailConfirm] = useState('');
  const [Password, setPassword] = useState('');
  const [PasswordConfirm, setPasswordConfirm] = useState('');

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
    
    console.log(Email, EmailConfirm, Password, PasswordConfirm);
  };

  return (
    <div>
      <header>
        <h2>회원가입</h2>
        <aside>
          <span>나의 온라인 사수, 인프런</span>
        </aside>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label for='email'>이메일</label>
          <Input
            id='email'
            type='email'
            placeholder='example@inflearn.com'
            value={Email}
            onChange={handleEmail}
          />
          <span></span>
        </div>
        <div>
          <label for='emailConfirm'>이메일 확인</label>
          <Input
            id='emailConfirm'
            type='email'
            placeholder='example@inflearn.com'
            value={EmailConfirm}
            onChange={handleEmailConfirm}
          />
          <span></span>
        </div>
        <div>
          <label for='password'>비밀번호</label>
          <Input
            type='password'
            id='password'
            placeholder='******'
            value={Password}
            onChange={handlePassword}
          />
          <span></span>
        </div>
        <div>
          <label for='passwordConfirm'>비밀번호 확인</label>
          <Input
            type='password'
            id='passwordConfirm'
            placeholder='******'
            value={PasswordConfirm}
            onChange={handlePasswordConfirm}
          />
          <span></span>
        </div>
        <SignUpButton bgColor='#00c471' onClick={handleSubmit} type='submit'>
          가입하기
        </SignUpButton>
      </form>
    </div>
  );
};

export default SignUp;

const SignUpButton = styled(Button)``;

const Input = styled.input`
  margin-top: 4px;
  padding: 13px 12px;
  width: 240px;
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
