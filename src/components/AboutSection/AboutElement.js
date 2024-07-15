import styled from 'styled-components';

export const AboutContainer = styled.div`
  margin-top: 10%;
  color: #000;
  background: #fff;
  margin-bottom: 5%;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
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
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
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
  font-size: 18px;
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

export const BerealText = styled.h2`
  text-align: center;
  margin-top: 45px;
  font-size: 1.8em;
  color: #333;
`;

export const BerealGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 10px 17px 10px 17px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const BerealGridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: none;
`;

export const BerealContainer = styled.div`
  background: #fafafa;
  border-radius: 15px;
  margin-top: 5%;
  margin-bottom: 5%;
  padding: 0 30px 0 30px;
`