import styled from "styled-components";


export const InfoContainer = styled.div`
  display: flex;
  color:#fff;
  background: ${({bgcolor})=>bgcolor};
  height: ${({height}) => height}px;
  align-items: center;
  vertical-align: middle;
  justify-content: center;

  @media screen and (max-width: 768px){
    padding: 100px 0;
  }
`

export const InfoWrapper = styled.div`

  z-index:1;
  padding:2rem;
`



export const TextWrapper = styled.div`
  max-width: 768px;
  padding-top: 0;
  padding-bottom: 60px;
  text-align: center;

`

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 2rem;
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;

`

export const Heading = styled.h1`
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
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`