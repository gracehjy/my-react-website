import React from 'react'
import { HeaderRow, Column1, Column2, TagContainer, TagCloud, TechnicalContainer, TechnicalWrapper, TopLine, Heading, Description, SubHeading } from './TechElement'
import { Reveal } from '../Reveal';

const TechSkillsSection = () => {
  return (
    <>
          <TechnicalContainer id="skills">
            <TechnicalWrapper>
                <HeaderRow>
                    <Reveal>
                    <TopLine>Technical Skills.</TopLine>
                    <Heading>Languages and Tools</Heading>
                    </Reveal>
                </HeaderRow>
                <Column2>
                    <Reveal>
                    <SubHeading>Intermediate</SubHeading>
                    <Description>
                        Languages:
                        <TagContainer>
                            <TagCloud>Java</TagCloud>
                            <TagCloud>Python</TagCloud>
                            <TagCloud>C++</TagCloud>
                            <TagCloud>HTML/CSS</TagCloud>
                            <TagCloud>Javascript</TagCloud>
                        </TagContainer>
                        Frameworks/Libraries: 
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
                    </Reveal>
                </Column2>
                <Column1>
                    <Reveal>
                    <SubHeading>Beginner</SubHeading>
                    <Description>
                        Languages:
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
                </Column1>
            </TechnicalWrapper>
          </TechnicalContainer>
    </>
  )
}

export default TechSkillsSection
