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
