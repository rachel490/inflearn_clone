import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../style/style';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePw = (e) => {
    console.log(e.target.value);
    setPw(e.target.value);
  };

  const handleSubmit = () => {
    axios({
      method: "post",
      url: "https://dev.jkrising.shop/inflearn/users/signup",
      data: {
        email: email,
        password: pw
      },
    })
      .then((res) => {
        console.log('success')
        console.log(res)
        window.alert(res);
      })
      .catch((error) => {
        console.log('error')
        console.log(error);
      });
  };

  return (
    <div>
      <header>
        <h2>회원가입</h2>
        <aside>
          <span>나의 온라인 사수, 인프런</span>
        </aside>
      </header>
      <main>
        <div>
          <label for='email'>이메일</label>
          <Input
            id='email'
            type='text'
            placeholder='example@inflearn.com'
            onChange={handleEmail}
          />
          <span></span>
        </div>
        <div>
          <label for='emailConfirm'>이메일 확인</label>
          <Input
            id='emailConfirm'
            type='text'
            placeholder='example@inflearn.com'
            onChange={handleEmail}
          />
          <span></span>
        </div>
        <div>
          <label for='password'>비밀번호</label>
          <Input
            type='password'
            id='password'
            placeholder='******'
            onChange={handlePw}
          />
          <span></span>
        </div>
        <div>
          <label for='passwordConfirm'>비밀번호 확인</label>
          <Input
            type='password'
            id='passwordConfirm'
            placeholder='******'
            onChange={handlePw}
          />
          <span></span>
        </div>
        <SignUpButton bgColor='#00c471' onClick={handleSubmit}>
          가입하기
        </SignUpButton>
      </main>
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
