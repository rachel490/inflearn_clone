import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};
`;

export const StLink = styled(Link)`
  color: currentColor;
  text-decoration: none;
  cursor: pointer;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const ModalWrap = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 80;
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

export const ModalOverlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(11, 19, 30, 0.37);
  width: 100vw;
  height: 100vh;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  margin: auto;
 
`;
