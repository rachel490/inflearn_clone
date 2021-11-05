import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import DashboardSidebar from '../components/Dashboard/DashboardSidebar';
import Footer from '../components/shared/Footer/Footer';
import Header from '../components/shared/Header/Header';

const SettingsTab = () => {
  return (
    <TabContainer>
      <TabList>
        <TabItem>
          <a href='/settings/account'>프로필 설정</a>
        </TabItem>
        <TabItem>
          <a href='/settings/notifications'>알림 설정</a>
        </TabItem>
      </TabList>
    </TabContainer>
  );
};

const TabContainer = styled.div`
  margin-bottom: 1.5rem;
  align-items: stretch;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
`;
const TabList = styled.ul`
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: flex-start;
  width: 100%;
`;
const TabItem = styled.li`
  font-size: 0.9rem;

  a {
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    color: #454545;
    display: flex;
    justify-content: center;
    margin-bottom: -1px;
    padding: 0.5em 1em;
    vertical-align: top;
  }
`;

const ProfileContent = () => {
    const [Name, setName] = useState();
    const [Introduce, setIntroduce] = useState();
    const [Email, setEmail] = useState();
    const [Phone, setPhone] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleIntroduce = (e) => {
        setIntroduce(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePhone= (e) => {
        setPhone(e.target.value);
    }

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        console.log(Name, Introduce)
        const url = `https://dev.jkrising.shop/inflearn/users/profile`;
        axios.patch(url, {
            nickName: Name,
            userIntro: Introduce
        }).then(res => console.log(res))
        .catch(err => console.log(err))
    }
    const handleEmailSubmit = (e) => {
        e.preventDefault();
        console.log(Email)
        const url = `https://dev.jkrising.shop/inflearn/users/email`;
        axios.patch(url, {
            email: Email
        }).then(res => console.log(res))
        .catch(err => console.log(err))
    }
    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        console.log(Phone)
        const url = `https://dev.jkrising.shop/inflearn/users/phonenumber`;
        axios.patch(url, {
            phoneNumber : Phone
        }).then(res => console.log(res))
        .catch(err => console.log(err))
    }

  return (
    <Content>
      <SettingsTab />
      <FormContainer onSubmit={handleProfileSubmit}>
        <ImgInputContainer>
          <ImgLabel for='profile-img'>
            <img
              src='https://cdn.inflearn.com/public/main/profile/default_profile.png'
              alt='default profile img'
            />
          </ImgLabel>
          <ImgInput id='profile-img' type='file'/>
        </ImgInputContainer>
        <TextInputContainer>
          <Label for='name'>닉네임</Label>
          <Input
            id='name'
            type='text'
            placeholder='변경할 닉네임을 입력해주세요'
            onChange={handleName}
          />
        </TextInputContainer>
        <TextInputContainer>
          <Label for='introduce'>자기소개</Label>
          <TextAreaInput id='introduce'  onChange={handleIntroduce}/>
        </TextInputContainer>
        <Button type='submit'>저장하기</Button>
      </FormContainer>

      <FormContainer >
        <Label>블로그 주소 설정</Label>
        <div>
          <span>https://www.inflearn.com/users/@</span>
          <Input type='text' placeholder='나만의 블로그 주소를 만들어보세요' />
        </div>
        <Button type='submit'>저장하기</Button>
      </FormContainer>

      <FormContainer onSubmit={handleEmailSubmit}>
        <Label>
          이메일 <span className='email'>(※ 이메일 변경 후 재인증 필요)</span>
        </Label>
        <Input type='text' placeholder='변경할 이메일을 입력해주세요'  onChange={handleEmail}/>
        <Button type='submit'>저장하기</Button>
      </FormContainer>

      <FormContainer>
        <Label>비밀번호</Label>
        <Wrap>
          <p>비밀번호를 새롭게 발급받아보세요!</p>
          <Button type='submit'>발급 받기</Button>
        </Wrap>
      </FormContainer>

      <FormContainer onSubmit={handlePhoneSubmit}>
        <Label for='phone'>
          휴대폰 번호 <span className='phone'>(-없이 숫자만 입력)</span>
        </Label>
        <div>
            <Input type='text' id='phone' placeholder='ex) 01012341234'  onChange={handlePhone}/>
            <VerifyButton type='submit'>인증요청</VerifyButton>
        </div>
      </FormContainer>
    </Content>
  );
};

const Content = styled.div`
  padding-top: 1rem;
  max-width: 786px;
  margin-bottom: 2rem;
  padding: 0.75rem;
  width: 100%;
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
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 57px;
    margin-bottom: 112px;
`

const ProfilePage = () => {
  return (
    <div>
      <Header />
      <DashboardHeader title='프로필' />
      <Container>
        <DashboardSidebar />
        <ProfileContent />
      </Container>
      <Footer />
    </div>
  );
};

export default ProfilePage;

const Container = styled.div`
  max-width: 1180px;
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
  display: flex;
`;
