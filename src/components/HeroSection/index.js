import React from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElement';
import Video from '../../videos/video.mp4';
import { Reveal } from '../Reveal';

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
       <VideoBg autoPlay loop muted playsInline src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <Reveal>
        <HeroH1>Hello, I'm Grace!</HeroH1>
        <HeroP>welcome to my website :D</HeroP>
        </Reveal>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
