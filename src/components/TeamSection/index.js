import React from 'react'
import { FaAndroid, FaDiscord, FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import image1 from '../../images/portrait1.jpg'
import image2 from '../../images/portrait2.jpg'
import image3 from '../../images/portrait3.jpg'
import useWindowDimensions from '../../utils/windowDimensions'
import { TeamContainer, TeamHeading, TeamMemberIcon, TeamMemberImage, TeamMemberInfo, TeamMemberName, TeamMembersWrapper, TeamMemberWrapper, TeamWrapper } from './TeamElements'

const TeamSection = () => {
  const {height,width} = useWindowDimensions();

  return (
    <>
    <TeamContainer height={height}>
        

      <TeamWrapper>
        <TeamHeading>
          The team
        </TeamHeading>
        <TeamMembersWrapper>
        <TeamMemberWrapper>
          <TeamMemberImage src={image1} >
          </TeamMemberImage>
          <TeamMemberName>
            Karel
          </TeamMemberName>
          <TeamMemberInfo>
            Passionate about holding hands and xoxo
          </TeamMemberInfo>
          <TeamMemberIcon>
            <FaLinkedinIn />
            <FaFacebook />
            <FaTwitter />
          </TeamMemberIcon>
        </TeamMemberWrapper>
        <TeamMemberWrapper>
          <TeamMemberImage src={image2} >
          </TeamMemberImage>
          <TeamMemberName>
            Keanu
          </TeamMemberName>
          <TeamMemberInfo>
          Passionate about holding hands and xoxo
          </TeamMemberInfo>
          
          <TeamMemberIcon>
            <FaLinkedinIn />
            <FaFacebook />
          </TeamMemberIcon>
        </TeamMemberWrapper>
        <TeamMemberWrapper>
          <TeamMemberImage src={image3} >
          </TeamMemberImage>
          <TeamMemberName>
            ?
          </TeamMemberName>
          <TeamMemberInfo>
          Passionate about holding hands and xoxo
          </TeamMemberInfo>
          <TeamMemberIcon>
            <FaDiscord />
            <FaAndroid />
          </TeamMemberIcon>
        </TeamMemberWrapper>
        </TeamMembersWrapper>
      </TeamWrapper>
    </TeamContainer>
    
    
    </>
  )
}

export default TeamSection
