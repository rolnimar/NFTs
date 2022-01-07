import React from 'react'
import { FaDiscord, FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FooterContainer, FooterIcon, FooterLink, FooterLinkItemsLeft, FooterLinkItemsRight, FooterLinksContainer, FooterLinkTitle, FooterSocialLinks, FooterWrap } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
            <FooterLinkItemsLeft>
              <FooterLinkTitle>IT IS A PLEASURE TO SEE YOU READING THIS
              </FooterLinkTitle>

              <FooterLink to="/">Nice</FooterLink>
              <FooterLink to="/">Fart</FooterLink>
              <FooterLink to="/">Tommy</FooterLink>
              <FooterLink to="/">are</FooterLink>
              <FooterLink to="/">Cool</FooterLink>
              
            </FooterLinkItemsLeft>
          <FooterLinkItemsRight>
            <FooterLinkTitle>SOCIAL
              </FooterLinkTitle>
                <FooterSocialLinks>
                  <FooterIcon to="/">
                   <FaLinkedinIn />
                  </FooterIcon>
                  <FooterIcon to="/">
                    <FaFacebook />  
                  </FooterIcon>
                  <FooterIcon to="/">
                   <FaTwitter />
                  </FooterIcon>
                  <FooterIcon to="/">
                    <FaDiscord />
                  </FooterIcon>
                </FooterSocialLinks>
          </FooterLinkItemsRight>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
