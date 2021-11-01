import React from 'react';
import styled from 'styled-components';
import { StLink } from '../style/style';
import { FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';
import linkData from './FooterData.js';
import Logo from '../Logo/Logo';

function FooterLinkCol({ data }) {
  console.log(data);
  return (
    <ColWrap>
      <ColTitle>{data.title}</ColTitle>
      <ListWrap>
        {data.links.map((item) => (
          <FooterLink to={item.url}>{item.name}</FooterLink>
        ))}
      </ListWrap>
    </ColWrap>
  );
}

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterTopContainer>
          {linkData.map((data) => {
            return <FooterLinkCol data={data} />;
          })}
        </FooterTopContainer>
        <FooterBottomContainer>
          <FooterBottomLeftContainer>
            <RowWrap>
              <span>
                <Logo />
              </span>
              <span>
                <FooterBeforeLink to='/policy/privacy' >개인정보취급방침</FooterBeforeLink>
              </span>
              <span>
                <FooterBeforeLink to='/policy/terms-of-service'>이용약관</FooterBeforeLink>
              </span>
            </RowWrap>
            <RowWrap>
              <span>(주)인프랩 | </span>
              <span>대표자: 이형주 | </span>
              <span>
                사업자번호: 499-81-00612
                <a
                  href='http://www.ftc.go.kr/bizCommPop.do?wrkr_no=4998100612'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  사업자 정보 확인
                </a>
              </span>
              <br />
              <span>통신판매업: 2018-성남분당B-0062 | </span>
              <span>개인정보보호책임자: 구자유 | </span>
              <span>
                이메일: <a href='mailto:info@inflearn.com'>info@inflearn.com</a>
              </span>
              <br />
              <span>
                주소: 경기도 성남시 분당구 대왕판교로 660 유스페이스1 301-1호
              </span>
            </RowWrap>
            <RowWrap>
              <span>©INFLAB. ALL RIGHTS RESERVED</span>
            </RowWrap>
          </FooterBottomLeftContainer>
          <FooterBottomRightContainer>
            <a
              href='https://post.naver.com/inflearn'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='text'>N</i>
            </a>
            <a
              href='https://blog.naver.com/inflearn'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='text'>B</i>
            </a>
            <a
              href='https://www.instagram.com/inflearn__official'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='icon'>
                <FaInstagram />
              </i>
            </a>
            <a
              href='https://www.youtube.com/channel/UC0Y0T9JpgIBbyGDjvy9PbOg'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='icon'>
                <FaYoutube />
              </i>
            </a>
            <a
              href='https://www.facebook.com/inflearn'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='icon'>
                <FaFacebookF />
              </i>
            </a>
          </FooterBottomRightContainer>
        </FooterBottomContainer>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background-color: #303740;
`;

const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1152px;
  margin: 0 auto;
`;

const FooterTopContainer = styled.div`
  display: flex;
  padding: 32px 20px;
  justify-content: space-between;
  border-bottom: 1px solid #444;
`;

const FooterBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;    
  padding: 32px 20px;
`;

const FooterBottomLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const FooterBottomRightContainer = styled.div`
  width: 210px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;

  a {
    display: inline-block;
    width: 34px;
    height: 34px;
    border-radius: 100%;
    background: #bdbdbd;
    text-align: center;
    line-height: 34px;
  }

  i {
    display: inline-block;
    font-size: 18px;
    vertical-align: center;
    color: #333;
  }

  .text {
    font-size: 22px;
    font-weight: 700;
    font-style: normal;
    display: flex;
    align-items: center;
    line-height: 34px;
    justify-content: center;
  }

  .icon {
    font-family: 'Font Awesome 5 Brands';
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
  }
`;

const ColWrap = styled.div`
  margin-right: 20px;
`;

const RowWrap = styled.div`
    margin-bottom: 8px;
    font-size: 12px;
    line-height: 1.5;
    color: #bdbdbd;
`;

const ColTitle = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #eee;
  padding: 16px 0;
  line-height: 1.43;
  display: block;
`;

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 1180px;
  overflow: hidden;
`;

const FooterLink = styled(StLink)`
  color: #bdbdbd;
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 7px;

`;

const FooterBeforeLink = styled(StLink)`
color: #bdbdbd;
font-size: 14px;
line-height: 1.43;
margin-bottom: 7px;

&::before {
    display: inline-block;
    content: "|";
    color: #bdbdbd;
    margin: 0 8px;
    font-size: 12px;
}
`;