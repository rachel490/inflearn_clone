import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Logo from '../Logo/Logo';
import { useHistory } from "react-router";
import { ModalWrap, ModalOverlay, Modal, Button } from '../style/style';
import { AiFillRest, AiOutlineClose } from 'react-icons/ai';
import SocialLogin from '../SocialLogin';
import {API, JWT_EXPIRE_TIME} from '../../../config';

function SignInModal({ toggleSignInModal }) {
  const history = useHistory();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const handleClick = () => {
    toggleSignInModal();
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  
  //로그인 로직 : 성공시 - onLoginSuccess, 실패시 - 에러 출력
  const onLogin = (e) => {
    toggleSignInModal();

    e.preventDefault();
    const data = {
      userId: Email,
      password: Password,
    };

    axios.post(API.LOGIN, data)
    .then(response => {
      if(response.data.isSuccess) {
        onLoginSuccess(response);
      } else {
        alert(response.data.message);
      }
    })
    .catch(err => console.log(err))
  }

  const onSilentRefresh = () => {
    let refreshToken = '';

    if (localStorage.getItem("refreshToken") === null) {
      alert('저장된 리프레시 토큰이 없습니다.');
    } else {
      refreshToken = localStorage.getItem("refreshToken");
    }

    axios.post(API.REFRESH_LOGIN, refreshToken)
    .then(response => {
      if (response.data.isSuccess) {
        onLoginSuccess(response);
      } else {
        alert(response.data.message);
      }
    })
    .catch(err => console.log(err))
  }
      

  const onLoginSuccess = (response) => {
    alert('login Successfully')
    const { jwt, refreshToken } = response.data.result;

    // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
    //  axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
     localStorage.setItem('refreshToken', refreshToken);
     localStorage.setItem('jwtToken', jwt);
     history.push('/');

    //console.log(jwt, refreshToken, localStorage.getItem('refreshToken'),localStorage.getItem('jwtToken'));
     

     // accessToken 만료하기 1분 전에 로그인 연장
    setTimeout(onSilentRefresh, JWT_EXPIRE_TIME - 60000);
  }

  return (
    <ModalWrap >
      <ModalOverlay id='hi' >
        <ModalContent>
          <AiOutlineClose onClick={handleClick} className="icon"/>
          <LogoWrap>
            <Logo />
          </LogoWrap>
          <Form onSubmit={onLogin}>
            <Input type='Email' placeholder='이메일 또는 아이디 입력' value={Email} onChange={handleEmail} />
            <Input type='password' placeholder='비밀번호' value={Password} onChange={handlePassword}/>
            <LoginButton bgColor='#00c471' type='submit'>로그인</LoginButton>
          </Form>
          <LinkWrap>
            <span>비밀번호 찾기</span>
            <a href='/signup'>회원가입</a>
          </LinkWrap>
          <SocialLogin />
        </ModalContent>
      </ModalOverlay>
    </ModalWrap>
  );
}

export default SignInModal;

const ModalContent = styled(Modal)`
  padding: 24px;
  width: 360px;
  height: 432px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  .icon {
    cursor: pointer;
  }
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 0 24px;
`;
const Form = styled.form``;
const Input = styled.input`
  display: block;
  margin-bottom: 12px;
  width: 312px;
  height: 48px;
  line-height: 1.47;
  font-size: 15px;
  border: 1px solid #dee2e6;
  letter-spacing: -0.3px;
  border-radius: 4px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 13px 12px;
`;

const Icon = styled.input`
  display: block;
`;

const LoginButton = styled(Button)`
  margin: 12px 0;
  width: 312px;
  height: 48px;
  font-weight: 700;
  color: #fff;
  line-height: 1.43;
  font-size: 14px;
  letter-spacing: -0.3px;
`;



const LinkWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

  a {
    margin-left: 16px;
  }

  a,
  span {
    line-height: 1.38;
    letter-spacing: -0.3px;
    font-size: 13px;
    font-weight: 400;
    color: #616568;
    border-bottom: 1px solid #858a8d;
    cursor: pointer;
  }

  &:after {
    position: relative;
    right: 54px;
    display: inline-block;
    width: 1px;
    height: 15px;
    background-color: #858a8d;
    content: ' ';
    pointer-events: none;
  }
`;
