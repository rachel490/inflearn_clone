import styled from "styled-components";
import { StLink } from "../style/style";

export const NavWrap = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const NavItemWrap = styled(StLink)`
  padding: 0.5rem 0.875rem;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const LinkText = styled.span`
  padding: 0.5rem;
  line-height: 1.5;
  color: #4a4a4a;
`;
