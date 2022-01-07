import React from 'react'
import useWindowDimensions from '../../utils/windowDimensions';
import { Heading, InfoContainer, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElements'


const InfoSection = ({lightBg,id,topLine,headline,bgcolor}) => {

  const {height,width} = useWindowDimensions();

  return (
    <>
  
      <InfoContainer lightBg={lightBg} id={id} height={height} bgcolor={bgcolor} >
        <InfoWrapper  >
          
        
            <TextWrapper>
              <TopLine>
              {topLine}
              </TopLine>
              <Heading>
                {headline}
              </Heading>
              <Subtitle>
                Subtitle
              </Subtitle>
            </TextWrapper>
            
          
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
