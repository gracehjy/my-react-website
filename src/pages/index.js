import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  // toggles mobile hamburger icon
  const [isOpen, setIsOpen]  = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar isOpen={isOpen} toggle={toggle}/>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <ExperienceSection></ExperienceSection>
      <ContactSection></ContactSection>
    </>
  )
}

export default Home
