import React from 'react'
import { AboutContainer, AboutWrapper, AboutRow, Column1, TextWrapper, TopLine, Heading, Description, Column2, ImgWrap, Img, BerealText, BerealGrid, BerealGridItem, BerealContainer } from './AboutElement'
import Me1 from '../../images/me1.jpg';
import Br1 from '../../images/Br1.JPG';
import Br2 from '../../images/Br2.JPG';
import Br3 from '../../images/Br3.jpg';
import Br4 from '../../images/Br4.JPG';
import Br5 from '../../images/Br5.JPG';
import Br6 from '../../images/Br6.JPG';
import Br7 from '../../images/Br7.jpg';
import Br8 from '../../images/Br8.jpg';
import Br9 from '../../images/Br9.jpg';
import Br10 from '../../images/Br10.jpg';
import Br11 from '../../images/Br11.jpg';
import Br12 from '../../images/Br12.jpg';
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
                        Hi hi, my name is Grace Huang. I'm a current Junior at Washington University in St. Louis pursuing a major in Computer Science + Mathematics and a minor in Biomedical Data Science.
                        Some of my technical areas of interest include software engineering (primarily front-end development) and machine learning. While these areas are quite different, I am passionate about both designing and developing applications, as well as working with real datasets to create impactful solutions.
                        I'm also particulary interested in exploring the intersection between technology and medicine, hence my decision to minor in Biomedical Data Science.
                        <br></br>
                        <br></br>
                        As for my other interests and enjoyments, I like matcha 🍵 (peep my hero section), video games 🎮, badminton 🏸, sleeping 🛌, eating 🥘, and being real 📸!
                    </Description>
                    </Reveal>
                </TextWrapper>
            </Column1>
            <Column2>
                <Reveal>
                <ImgWrap>
                    <Img src={Me1}/>
                </ImgWrap>
                </Reveal>
            </Column2>
          </AboutRow>
          <BerealContainer>
            <BerealText>⚠️ It's Time to BeReal. ⚠️</BerealText>
            <Reveal>
            <BerealGrid>
              <BerealGridItem><Img src={Br1} /></BerealGridItem>
              <BerealGridItem><Img src={Br2} /></BerealGridItem>
              <BerealGridItem><Img src={Br3} /></BerealGridItem>
              <BerealGridItem><Img src={Br4} /></BerealGridItem>
              <BerealGridItem><Img src={Br5} /></BerealGridItem>
              <BerealGridItem><Img src={Br6} /></BerealGridItem>
              <BerealGridItem><Img src={Br7} /></BerealGridItem>
              <BerealGridItem><Img src={Br8} /></BerealGridItem>
              <BerealGridItem><Img src={Br9} /></BerealGridItem>
              <BerealGridItem><Img src={Br10} /></BerealGridItem>
              <BerealGridItem><Img src={Br11} /></BerealGridItem>
              <BerealGridItem><Img src={Br12} /></BerealGridItem>
            </BerealGrid>
            </Reveal>
          </BerealContainer>
        </AboutWrapper>
      </AboutContainer>
    </>
  )
}

export default AboutSection
