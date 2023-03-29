import styled from 'styled-components';

// *Estilização do header
export const Header = styled.div`
  box-sizing: border-box;
  height: 100px;
  width: 100%;
  padding: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  z-index: 10;
  &.fixed {
    background: #96c9e9;
    transition: 0.3s;
  }
  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

// *Estilização do menu UL
export const MenuUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    width: 100%;
    top: 100px;
    right: 0px;
    background: #aeaeae;
    transition: 0.6s;
    z-index: 1000;
    height: 0px;
    visibility: hidden;
    overflow-y: hidden;
  }
`;

// *Estilização da tag a do menu
export const MenuA = styled.a`
  display: block;
  padding: 0.5rem;
  font-size: 1.2rem;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  border: none;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 500ms;
  transition-property: color;
  &.scrolled {
    color: #ffff;
  }
  @media (max-width: 768px) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    &.scrolled {
      color: #000;
    }
  }
  &:focus:after {
    width: 100%;
    left: 0%;
  }
  &:hover:after {
    width: 100%;
    left: 0%;
  }
  &:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #000;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 500ms;
    transition-property: width, left;
  }
`;
// *Estilização do botão para mobile
export const BtnMobile = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
    gap: 0.5rem;
  }
`;

// *Estilização do Hamburger
export const Hamburger = styled.span`
  @media (max-width: 768px) {
    border-top: 2px solid;
    width: 40px;
    color: #ffffff;
    &::after,
    ::before {
      content: "";
      display: block;
      width: 40px;
      height: 2px;
      margin-top: 5px;
      transition: 0.3s;
      position: relative;
      background-color: #ffffff;
    }
  }
`;

// *Estilização do Nav
export const Nav = styled.nav`
  @media (max-width: 768px) {
    &.active #hamburger {
      border-top-color: transparent;
    }
    &.active #hamburger::before {
      transform: rotate(135deg);
      background: #ffffff;
    }
    &.active #hamburger::after {
      transform: rotate(-135deg);
      background-color: #ffffff;
      top: -7px;
    }
    &.active #menu {
      height: calc(100vh - 70px);
      visibility: visible;
      overflow-y: auto;
    }
  }

`;