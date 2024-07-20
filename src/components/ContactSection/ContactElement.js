import styled, { css } from 'styled-components';

export const ContactContainer = styled.div`
  margin-top: 8%;
  color: #000;
  background: #fff;
  margin-bottom: 8%;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const ContactWrapper = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
`

export const TopLine = styled.p`
  color: #567585;
  font-size: 16px;
  line-height: 28px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-botttom: 20px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
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
export const IconSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 11%;
`

export const Icon = styled.div`
  margin-top: 0;
  font-size: 30px;
  cursor: pointer;
  color: #333;
  margin-left: 1px;
  margin-right: 25px;

  &:hover {
    color: #567585;
  }


  ${({ isHovered }) =>
    isHovered &&
    css`
      transform: scale(1.1);
    `}
`
export const Line = styled.div`
  flex-grow: 1;
  height: 2px;
  background-color: #567585;
  align-self: center;
`
