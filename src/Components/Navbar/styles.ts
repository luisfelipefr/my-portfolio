import { FaBars } from "react-icons/fa";FaBars
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


interface INav {
  click: boolean;
}

export const Nav = styled.div`
  position: fixed;
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  width: 100%;
  margin-bottom: 1rem;
  align-items: center;
  background: var(--background);
  box-shadow: 0px 2px 11px 2px #000;
  /* Third Nav */
  /* justify-content: flex-start; */
 
`;

export const NavLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: var(--green);
      transition: all 0.3s ease;
    }
  }
  &:hover {
    color: var(--green);
    transition: all 0.3s ease;
  }
`;

export const NavLogo = styled.a`
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  margin-right: 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: var(--green);
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  margin-top: 0.5rem;
  color: var(--shape);
  @media screen and (max-width: 768px) {
    
    display: block;
    
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
  &:hover {
    color: var(--green);
  }
`;


export const NavMenu = styled.ul<INav>`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${(props) => (props.click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: var(--background);
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  div {
    margin-left: 8px;
    img {
      width: 0.625rem;
      height: 0.9rem;
    }
  }
  img {
    width: 2.3rem;
    height: 1.6rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    color: #ffffff;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    &:hover {
      color: var(--green);
    }
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #4b59f7;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;