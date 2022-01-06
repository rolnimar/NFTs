import styled from "styled-components";


export const InfoContainer = styled.div`
  color:#fff;
  background: ${({bgcolor})=>bgcolor};
  height: ${({height}) => height}px;

  @media screen and (max-width: 768px){
    padding: 100px 0;
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  align-items: center;
  z-index:1;
  padding:2rem;
  justify-content:center;
`

export const InfoRow = styled.div`
  display: grid;
  /* grid-auto-columns: minmax(auto,1fr); */
  align-items: center;
  
`


export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 2rem;
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px){
    font-size: 2rem;

  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom:35px;
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`