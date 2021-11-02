import React from 'react';
import axios from 'axios';
import {Button} from '../style/style'
import styled from 'styled-components'

const { Kakao } = window;
const loginWithKakao = () => {

    Kakao.Auth.login({
      scope: 'profile_nickname, account_email',
      success: function (response) {
        window.Kakao.Auth.setAccessToken(response.access_token);
        
        const ACCESS_TOKEN = window.Kakao.Auth.getAccessToken();
        
        window.Kakao.API.request({
        url: "/v2/user/me",
        success: function ({ kakao_account }) {
          const {  email,profile } = kakao_account;
  
          axios({
            method: "post",
            url: "/signup",
            data: {
              "id": email,
              "nickname": profile.nickname,
              "image" :profile.profile_image_url,
            },
          })
            .then((res) => {
              console.log(res);
              // history.push("/main/feed");
            })
            .catch((error) => {
              // console.log(error);
              console.error(error);
              alert("카카오 로그인 에러?");
            });
  
        },
        fail: function (error) {
          console.log(error);
        },
      });
  
  
      },
      fail: function (error) {
        console.log(error);
      },
    });
  
  };

function KakaoLogin() {
  return (
    <div onClick={loginWithKakao}>
        <LoginButton bgColor="#fae500">
            <svg width="18px" xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 18 17"><g transform="translate(0.000000,17.000000) scale(0.100000,-0.100000)" stroke="none"><path fill="#212529" d="M38 154 c-15 -8 -30 -25 -34 -38 -6 -26 10 -66 27 -66 7 0 9 -10 5 -26 -7 -25 -6 -25 16 -10 12 9 31 16 41 16 29 0 75 28 82 50 10 31 -3 59 -35 75 -36 19 -67 18 -102 -1z"></path></g></svg>
            <span>카카오 로그인</span>
        </LoginButton>
    </div>
  );
}

export default KakaoLogin;

const LoginButton = styled(Button)`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    width: 150px;
    box-sizing: border-box;

    span {
        margin-left: 5px;
    }
`