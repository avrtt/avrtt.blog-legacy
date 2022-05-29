import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  height: 85px;
  display: flex;
  justify-content: space-between;
  z-index: 12;
`;
  
export const NavLink = styled(Link)`
  color: #8e8e8e;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4d4d4d;
    font-weight: bold;
  }
  &:hover {
      color: #696969;
      transition: 200ms ease-in;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
