import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ContactContainer, ContactWrapper, TopLine, Heading, IconSection, Icon, Line} from './ContactElement'
import { Reveal } from '../Reveal';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactSection = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <>
      <ContactContainer id='contact'>
        <ContactWrapper>
            <Reveal>
            <TopLine>Contact.</TopLine>
            <Heading>Feel Free To Reach Out And Connect With Me!</Heading>
            </Reveal>
            <IconSection>
                <Reveal>
                    <Link
                        className='icon-link linkedin'
                        to='https://www.linkedin.com/in/grace-huang-b206a7250/'
                        target='_blank'
                        aria-label='LinkedIn'
                    > 
                        <Icon
                            onMouseEnter={() => setHoveredIcon(1)}
                            onMouseLeave={() => setHoveredIcon(null)}
                            isHovered={hoveredIcon === 1}
                        ><i className='fab fa-linkedin'></i></Icon>
                    </Link>
                </Reveal>
                <Reveal>
                    <Link
                        className='icon-link instagram'
                        to='https://www.instagram.com/gracehjy_/'
                        target='_blank'
                        aria-label='Instagram'
                    >
                        <Icon
                            onMouseEnter={() => setHoveredIcon(2)}
                            onMouseLeave={() => setHoveredIcon(null)}
                            isHovered={hoveredIcon === 2}
                        ><i className='fab fa-instagram'></i></Icon>
                    </Link>
                </Reveal>
                <Reveal>
                    <a
                        className='icon-link email'
                        href='mailto:grace.h@wustl.edu'
                        aria-label='Email'
                    >
                        <Icon
                            onMouseEnter={() => setHoveredIcon(3)}
                            onMouseLeave={() => setHoveredIcon(null)}
                            isHovered={hoveredIcon === 3}
                        ><i className='fas fa-envelope'></i></Icon>
                    </a>
                </Reveal>
                <Line></Line>
            </IconSection>
        </ContactWrapper>
      </ContactContainer>
    </>
  )
}

export default ContactSection;