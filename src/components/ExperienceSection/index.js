import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExperienceContainer, ExperienceWrapper, ExperienceRow, ExperienceCard, TopLine2, Description, ResumeSection, ResumeText, TopLine, TextWrapper, Heading } from './ExperienceElement'
import Resume from '../../pdfs/Resume.pdf'
import { Reveal } from '../Reveal';

const ExperienceSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <ExperienceContainer id="experience">
      <TextWrapper>
        <Reveal>
        <TopLine>Experience.</TopLine>
        <Heading>Take A Look At My Professional Journey!</Heading>
        </Reveal>
      </TextWrapper>
      <ExperienceWrapper>
        <ExperienceRow>
          <ExperienceCard
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              isHovered={hoveredCard === 1}
            >
                <Reveal>
                <TopLine2>Principal Financial Group | Software Engineer Intern</TopLine2>
                <Description>
                Working with the <Link to="https://design.principal.com/4eed865c5/p/44778e-principal-design-system">Principal Design System</Link> team, I assisted in the development and maintenance of PFG's design system, ensuring consistency and efficiency across all digital products.
                I developed standardized and reusable web components using modern web technologies such as React.js, Typescript, and SCSS.
                </Description>
                </Reveal>
            </ExperienceCard>
            <ExperienceCard
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
              isHovered={hoveredCard === 2}
            >
                <Reveal>
                <TopLine2>Washington University in St. Louis | Teaching Assistant</TopLine2>
                <Description>
                As a former TA for Logic & Discrete Mathematics and a current TA for Data Structures & Algorithms and Object-Oriented Software Development Laboratory, I spend most of my time at school conducting weekly office hours to answer students' questions and to assist them on problem sets. I also grade and provide feedback on students' exams and assignments.
                For Data Structures & Algorithms in particular, I help students practice lecture material during weekly studio sessions.
                </Description>
                </Reveal>
            </ExperienceCard>
            <ExperienceCard
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
              isHovered={hoveredCard === 3}
            >
                <Reveal>
                <TopLine2>National Advanced Driving Simulator | Data Analyst Intern</TopLine2>
                <Description>
                Working at <Link to="https://dsri.uiowa.edu/">NADS</Link> as a high school intern, I spent most of my time learning from my peers and mentors. The simulations studied consisted of drivers taking on specific tasks and researchers tracking where the drivers' eyes moved during those tasks. By the end of this internship, I had developed a batch-processing method 
                using Python to clean 1000+ unstructured eye-tracking pixel data, and I had identified the primary areas of visual distraction amongst drivers by dividing the pixel data into quadrants and visualizing that data using various statistical models.
                </Description>
                </Reveal>
            </ExperienceCard>
        </ExperienceRow>
      </ExperienceWrapper>
      <ResumeSection>
        <Reveal>
        <ResumeText>
          <p>Want more info regarding my projects or coursework?</p>
          <p>View my resume here!</p>
        </ResumeText>
        </Reveal>
        <a
          href={Resume}
          rel="noopener noreferrer"
          target="_blank"
          download>Download
        </a>
      </ResumeSection>
    </ExperienceContainer>
    </>
  )
}

export default ExperienceSection
