import React from 'react'
import {TagContainer, TagCloud, TechnicalContainer, TechnicalWrapper, TopLine, Heading, Description, SubHeading } from './TechElement'
import { Reveal } from '../Reveal';

const TechSkillsSection = () => {
  return (
    <>
          <TechnicalContainer id="skills">
            <TechnicalWrapper>
            <Reveal>
            <TopLine>Technical Skills.</TopLine>
            <Heading>Languages and Tools</Heading>
            <SubHeading>Intermediate</SubHeading>
            <Description>
                Languages: <tab> </tab>
                <TagContainer>
                    <TagCloud>Java</TagCloud>
                    <TagCloud>Python</TagCloud>
                    <TagCloud>C++</TagCloud>
                    <TagCloud>HTML/CSS</TagCloud>
                    <TagCloud>Javascript</TagCloud>
                </TagContainer>
                Frameworks/Libraries: <tab> </tab>
                <TagContainer>
                    <TagCloud>React</TagCloud>
                    <TagCloud>Flask</TagCloud>
                    <TagCloud>NumPy</TagCloud>
                    <TagCloud>Pandas</TagCloud>
                    <TagCloud>Matplotlib</TagCloud>
                </TagContainer>
                Tools:
                <TagContainer>
                    <TagCloud>Figma</TagCloud>
                    <TagCloud>Git</TagCloud>
                    <TagCloud>Jupyter Notebook</TagCloud>
                    <TagCloud>Jira</TagCloud>
                </TagContainer>
            </Description>
            <SubHeading>Beginner</SubHeading>
            <Description>
                Languages: <tab> </tab>
                <TagContainer>
                    <TagCloud>R</TagCloud>
                    <TagCloud>PHP</TagCloud>
                    <TagCloud>SQL</TagCloud>
                </TagContainer>
                Frameworks/Libraries: <tab> </tab>
                <TagContainer>
                    <TagCloud>D3.js</TagCloud>
                    <TagCloud>Jest</TagCloud>
                    <TagCloud>Socket.IO</TagCloud>
                </TagContainer>
                Tools:
                <TagContainer>
                    <TagCloud>AWS</TagCloud>
                </TagContainer>

            </Description>
            </Reveal>
            </TechnicalWrapper>
          </TechnicalContainer>
    </>
  )
}

export default TechSkillsSection
