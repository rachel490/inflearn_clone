import styled from "styled-components";
import { Button } from "../style/style";
import { Link } from "react-router-dom";

export const HeaderWrap = styled.div`
  height: 64px;
  box-shadow: 0 2px 4px 0 hsl(0deg 0% 81% / 50%);
  background: #fff;
  margin-bottom: 5px;
  position: fixed;
  top:0;
  width: 100vw;
  z-index:10;
  
`;

export const HeaderContainer = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  padding-right: 1.5rem;
`;

export const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 auto;
  height: 100%;
`;

export const Box = styled.div`
  display: flex;
  height: 100%;
  box-sizing: border-box;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

export const HeaderButton = styled(Link)`
  border: 1px solid #dbdbdb;
  padding: 0.5rem;
  font-size: 1.05rem;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};
  border-radius: 4px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
    margin-right: 0.5rem;
  
`;

export const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;
