import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SettingsTab from "./SettingsTab";
import axios from "axios";
import { API, JWT_TOKEN } from "../../config";

const ProfileContent = () => {
  const [Name, setName] = useState();
  const [Introduce, setIntroduce] = useState();
  const [Email, setEmail] = useState();
  const [Phone, setPhone] = useState();

  const emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const phonereg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

  const check = (re, target) => {
    if (re.test(target)) {
      return true;
    }
    return false;
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleIntroduce = (e) => {
    setIntroduce(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  useEffect(() => {
    if (Email && !check(emailreg, Email)) {
      document.querySelector(".email_validation_message").innerText =
        "이메일 형식이 올바르지 않습니다.";
    } else {
      document.querySelector(".email_validation_message").innerText = "";
    }

    if (Phone && !check(phonereg, Phone)) {
      document.querySelector(".phone_validation_message").innerText =
        "전화번호 형식이 올바르지 않습니다.";
    } else {
      document.querySelector(".phone_validation_message").innerText = "";
    }
  });

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: "patch",
      url: API.PROFILE_INFO_UPDATE,
      headers: {
        "x-access-token": localStorage.getItem('jwtToken'),
      },
      data: {
        nickName: Name,
        userIntro: Introduce,
      },
    };

    axios(config)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((err) => console.log(err));
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    const config = {
      method: "patch",
      url: API.PROFILE_EMAIL_UPDATE,
      headers: {
        "x-access-token": localStorage.getItem('jwtToken'),
      },
      data: {
        email: Email,
      },
    };

    axios(config)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((err) => console.log(err));
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: "patch",
      url: API.PROFILE_PHONE_UPDATE,
      headers: {
        "x-access-token": localStorage.getItem('jwtToken'),
      },
      data: {
        phoneNumber: Phone,
      },
    };

    axios(config)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Content>
      <SettingsTab />
      <FormContainer onSubmit={handleProfileSubmit}>
        <ImgInputContainer>
          <ImgLabel for="profile-img">
            <img
              src="https://cdn.inflearn.com/public/main/profile/default_profile.png"
              alt="default profile img"
            />
          </ImgLabel>
          <ImgInput id="profile-img" type="file" />
        </ImgInputContainer>
        <TextInputContainer>
          <Label for="name">닉네임</Label>
          <Input
            id="name"
            type="text"
            placeholder="변경할 닉네임을 입력해주세요"
            onChange={handleName}
          />
        </TextInputContainer>
        <TextInputContainer>
          <Label for="introduce">자기소개</Label>
          <TextAreaInput id="introduce" onChange={handleIntroduce} />
        </TextInputContainer>
        <Button type="submit">저장하기</Button>
      </FormContainer>

      <FormContainer>
        <Label>블로그 주소 설정</Label>
        <div>
          <span>https://www.inflearn.com/users/@</span>
          <Input type="text" placeholder="나만의 블로그 주소를 만들어보세요" />
        </div>
        <Button type="submit">저장하기</Button>
      </FormContainer>

      <FormContainer onSubmit={handleEmailSubmit}>
        <Label>
          이메일 <span className="email">(※ 이메일 변경 후 재인증 필요)</span>
        </Label>
        <Input
          type="text"
          placeholder="변경할 이메일을 입력해주세요"
          onChange={handleEmail}
        />
        <span className="email_validation_message message"></span>
        <Button type="submit">저장하기</Button>
      </FormContainer>

      <FormContainer>
        <Label>비밀번호</Label>
        <Wrap>
          <p>비밀번호를 새롭게 발급받아보세요!</p>
          <Button type="submit">발급 받기</Button>
        </Wrap>
      </FormContainer>

      <FormContainer onSubmit={handlePhoneSubmit}>
        <Label for="phone">
          휴대폰 번호 <span className="phone">(-없이 숫자만 입력)</span>
        </Label>
        <div>
          <Input
            type="text"
            id="phone"
            placeholder="ex) 01012341234"
            onChange={handlePhone}
          />
          <VerifyButton type="submit">인증요청</VerifyButton>
        </div>
        <span className="phone_validation_message message"></span>
      </FormContainer>
    </Content>
  );
};

export default ProfileContent;

const Content = styled.div`
  max-width: 786px;
  margin-bottom: 2rem;
  padding: 0.75rem;
  width: 100%;
  padding-top: 1rem;
`;

const FormContainer = styled.form`
  border: 1px solid #efefef;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin-top: 16px;

  div {
    display: flex;
    align-items: center;
    width: 100%;

    span {
      margin-top: 10px;
      display: block;
    }
  }

  .message {
    display: inline-block;
    margin-top: 0.5rem;
    font-size: 12px;
    color: #ff7867;
  }
`;

const ImgInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.75em;
  width: 100%;

  img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }
`;

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 2rem;
`;

const ImgLabel = styled.label`
  line-height: 1.5rem;
`;

const ImgInput = styled.input`
  display: none;
`;

const Label = styled.label`
  width: 100%;
  color: #595959;
  font-size: 1rem;
  font-weight: 800;

  span.email {
    color: #ff7867;
    font-size: 12px;
    font-weight: 400;
  }
  span.phone {
    font-weight: 400;
    line-height: 1.38;
    letter-spacing: -0.3px;
    font-size: 13px;
    color: #495057;
    margin-left: 4px;
  }
`;

const Input = styled.input`
  width: 100%;
  background: #f5f5f5;
  box-shadow: none;
  border: 0;
  border-radius: 0;
  margin-top: 10px;
  height: 40px;
  padding: 10px 12px;
  box-sizing: border-box;
`;

const TextAreaInput = styled.textarea`
  width: 100%;
  background: #f5f5f5;
  box-shadow: none;
  border: 0;
  border-radius: 0;
  margin-top: 10px;
  height: 100px;
`;

const Button = styled.button`
  width: 100%;
  max-width: 280px;
  background: #2fc97a;
  height: 50px;
  font-weight: 800;
  margin-top: 32px;
  border: none;
  color: #fff;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
`;

const VerifyButton = styled.button`
  width: 100%;
  height: 50px;
  font-weight: 800;
  margin-top: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #00c471;
  color: #00c471;
  font-weight: 500;
  background-color: #fff;
  margin-left: 8px;
  width: 78px;
  font-size: 14px;
  cursor: pointer;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 57px;
  margin-bottom: 112px;
`;
