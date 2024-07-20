import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarElement'

const Navbar = ({ toggle, isOpen }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
       setScrollNav(true); 
    }
    else{
        setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo as={LinkS} smooth={true} duration={800} spy={true} exact={true} offset={-70} to="home">GH.</NavLogo>
            <MobileIcon onClick={toggle} isOpen={isOpen}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks as={LinkS} smooth={true} duration={800} spy={true} exact={true} offset={-70} to="home">Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks as={LinkS} smooth={true} duration={800} spy={true} exact={true} offset={-80} to="about">About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks as={LinkS} smooth={true} duration={800} spy={true} exact={true} offset={-70} to="experience">Experience</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks as={LinkS} smooth={true} duration={800} spy={true} exact={true} offset={-80} to="contact">Contact</NavLinks>
                </NavItem>
            </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
