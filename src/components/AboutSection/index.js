import React from 'react'
import {AboutContainer, AboutWrapper, AboutRow, Column1, TextWrapper, TopLine, Heading, Description, Column2, ImgWrap, Img} from './AboutElement'
import Me2 from '../../images/Me2.jpg';
import { Reveal } from '../Reveal';

const AboutSection = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <AboutRow>
            <Column1>
                <TextWrapper>
                    <Reveal>
                    <TopLine>About.</TopLine>
                    <Heading>Let's Get To Know Each Other!</Heading>
                    <Description>
                        Hi, my name is Grace Huang. I'm a rising senior at Washington University in St. Louis pursuing a major in Computer Science + Mathematics and a minor in Human-Computer Interaction.
                        Some of my technical areas of interest include software engineering (primarily front-end development) and data analysis/visualization. I am passionate about both designing and developing applications, 
                        as well as working with real datasets to uncover underlying issues and create impactful solutions.
                        As I continue to explore potential career paths to pursue, I've also developed a strong interest in product management and UI/UX design.
                        <br></br>
                        <br></br>
                        As for my other non-career-related interests, I like playing video games 🎮 and badminton 🏸, sleeping 🛌, eating 🥘, traveling
                        ✈️, and making matcha 🍵!
                    </Description>
                    </Reveal>
                </TextWrapper>
            </Column1>
            <Column2>
                <Reveal>
                <ImgWrap>
                    <Img src={Me2}/>
                </ImgWrap>
                </Reveal>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  )
}

export default AboutSection
