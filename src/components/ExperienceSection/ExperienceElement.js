import styled, { css } from 'styled-components';

export const ExperienceContainer = styled.div`
  background-color: rgba(56, 75, 85, 0.80);
  padding: 85px 30px;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding: 100px 30px;
  }
`;

export const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const ExperienceRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1300px;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const ExperienceCard = styled.div`
  background: #fafafa;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-color: #f0f0f0;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  ${({ isHovered }) =>
    isHovered &&
    css`
      transform: scale(1.1);
    `}
`;

export const TopLine2 = styled.p`
  color: #333;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  color: #333;
  font-size: 15px;
`;

export const ResumeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  gap: 0.5rem;
  margin-top: 20px;
  padding: 0 24px;
  max-width: 1300px; /* Match the max-width */

  a {
    background-color: transparent;
    border: 2px solid #333;
    color: #333;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
    text-decoration: none;
    width: max-content;

    &:hover {
      background-color: #333;
      color: #fff;
    }

    &:focus {
      outline: none;
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

export const ResumeText = styled.p`
  color: #333;
  font-size: 16px;
  font-weight: 700;
  margin-top: 24px; 
  
  p {
    margin-bottom: 10px;
  }
`

export const TextWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 24px;
  }
`

export const TopLine = styled.p`
  color: #fafafa;
  font-size: 16px;
  line-height: 28px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-botttom: 24px;
`

export const Heading = styled.h1`
  margin-bottom: 12px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #333;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`