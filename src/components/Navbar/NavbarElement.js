import styled from 'styled-components';
// links to diff page
import { Link as LinkR } from 'react-router-dom';
// links to section on same page 
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
background: ${({ scrollNav }) => (scrollNav ? '#567585' : 'rgba(56, 75, 85, 0.80)')};
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  margin-top: -70px;
  transition: background-color 0.3s ease-in-out;

  @media screen an (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1300px;
`

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate (-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    align-items: center;
    padding-right: 48px;
    margin-top: 20.6px;
    opacity: ${({ isOpen }) => (isOpen ? '0%' : '100%')};
  }
`

export const NavMenu = styled.ul`
  display: flex;
  list-styled: none;
  text-align: center;
  align-items: center;
  list-style-type: none;
  gap: 2rem;
  padding-right: 12px;
  
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 70px;
`

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0;
  height: 100%;
  cursor: pointer;
  position: relative;

  &.active {
    &::after {
      width: 100%;
      background: #829db2;
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2.5px;
    display: block;
    margin-top: 1.7rem;
    left: 0;
    background: #829db2;
    transition: width 1.5s ease;
    -webkit-transition: width 1.5s ease;
  }

  &:hover::after {
    width: 100%;
    background: #829db2;
  }
`
