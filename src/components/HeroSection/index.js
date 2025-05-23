import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElement';
import Video from '../../videos/video.mp4';
import { Reveal } from '../Reveal';
import { Typewriter } from '../Typing';

const HeroSection = () => {
  const [showText, setShowText] = useState(false);

  return (
    <HeroContainer id="home">
      <HeroBg>
       <VideoBg autoPlay loop muted playsInline src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
          <HeroH1>
            <Typewriter 
              text="Hello, I'm Grace!" 
              delay={75} 
              onDone={() => setShowText(true)} />
          </HeroH1>
          <HeroP>
            {showText && (
              <Typewriter text="welcome to my website :D" delay={75} />
            )}
          </HeroP>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
