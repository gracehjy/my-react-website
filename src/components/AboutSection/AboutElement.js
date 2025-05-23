import styled from 'styled-components';

export const AboutContainer = styled.div`
  color: #000;
  background: #fff;
  padding: 85px 30px 0px 30px;
`

export const AboutWrapper = styled.div`
  padding: 0px 25px;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
`

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
  
  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1';
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  margin-right: 25px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  margin-left: 25px;
  grid-area: col2;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none;
  }
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
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

export const Description = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 24px;
  color: #333;
  padding-left: 2px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  
  @media (max-width: 768px) {
    display: none;
  }
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 50px 0;
  border-radius: 15px;
`