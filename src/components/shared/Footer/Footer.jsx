import React from 'react';
import styled from 'styled-components';
import { StLink } from '../style/style';
import { FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';
import linkData from './FooterData.js';

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
          <FooterBottomLeftContainer></FooterBottomLeftContainer>
          <FooterBottomRightContainer>
            <a
              href='https://post.naver.com/inflearn'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>N</span>
            </a>
            <a
              href='https://blog.naver.com/inflearn'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>B</span>
            </a>
            <a
              href='https://www.instagram.com/inflearn__official'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i>
                <FaInstagram />
              </i>
            </a>
            <a
              href='https://www.youtube.com/channel/UC0Y0T9JpgIBbyGDjvy9PbOg'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i>
                <FaYoutube />
              </i>
            </a>
            <a
              href='https://www.facebook.com/inflearn'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i>
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
`;

const FooterBottomLeftContainer = styled.div`
  display: flex;
`;

const FooterBottomRightContainer = styled.div`
  display: flex;

  i {
    display: inline-block;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: #bdbdbd;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: inline-block;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: #bdbdbd;
    font-size: 22px;
    font-weight: 700;
    font-style: normal;
    text-align: center;
    line-height: 34px;
  }
`;

const ColWrap = styled.div`
  margin-right: 20px;
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
