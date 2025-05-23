import styled from 'styled-components';

export const TechnicalContainer = styled.div`
  background: #fafafa;
  border-radius: 15px;
  padding: 85px 30px;
  width: 100%;
`

export const TechnicalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
`;

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
export const SubHeading = styled.p`
  color: #333;
  font-size: 16px;
  line-height: 28px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-botttom: 20px;
`
export const TagContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
    padding: 10px 0;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap; 
    }
`
export const TagCloud = styled.div`
    color: white;
    padding: 4px 20px;
    border-radius: 25px;
    background-color: #567585;
    font-size: 14px;
    `