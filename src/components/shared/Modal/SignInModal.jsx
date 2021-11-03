import styled from 'styled-components';
import Logo from '../Logo/Logo';
import { ModalWrap, ModalOverlay, Modal, Button } from '../style/style';
import KaKaoLogin from '../Header/KaKaoLogin';
import GoogleLogin from '../Header/GoogleLogin';
import { AiOutlineClose } from 'react-icons/ai';

function SignInModal({ toggleSignInModal }) {
  return (
    <ModalWrap>
      <ModalOverlay onClick={toggleSignInModal} id='hi'>
        <ModalContent>
          <AiOutlineClose />
          <LogoWrap>
            <Logo />
          </LogoWrap>
          <Form>
            <Input type='text' placeholder='이메일 또는 아이디 입력' />
            <Input type='password' placeholder='비밀번호' />
            <LoginButton bgColor='#00c471'>로그인</LoginButton>
          </Form>
          <LinkWrap>
            <span>비밀번호 찾기</span>
            <a href='/signup'>회원가입</a>
          </LinkWrap>
          <SocialLoginContainer>
            <hr />
            <Text>간편로그인</Text>
            <SocialLoginWrap>
              <KaKaoLogin />
              <GoogleLogin />
            </SocialLoginWrap>
          </SocialLoginContainer>
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
