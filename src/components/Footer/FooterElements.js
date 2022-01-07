import styled from "styled-components"
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
  background-color: #000;  
  box-sizing: unset;
  
`

export const FooterWrap = styled.div`
  padding: 3rem;
  padding-left: 6rem;
  padding-right: 6rem;
  
`

export const FooterLinksContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;

  @media screen and (max-width: 820px){
    flex-direction: column;
  }

`


export const FooterLinkItemsLeft = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 400px;
  color:#fff;

    @media screen and (max-width:420px){
      margin:0;
      padding: 10px;
      width: 100%;
    }
`
export const FooterLinkItemsRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: center;
  margin: 0px;
  max-width: 820px;
  color:#fff;
  font-size: 30px;

    @media screen and (max-width:820px){
      margin:0;
      padding-top: 1rem;
      width: 100%;
      align-items: flex-start;
    }
`

export const FooterSocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;

  @media screen and (max-width:820px){
    align-self: flex-start;
  }
`


export const FooterLinkTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;

  &:hover {
    color:#01bf71;
    transition: 0.3s ease-out;
  
  }
`

export const FooterIcon = styled(Link)`
  color:#fff;
  padding-left: 1rem;
  text-decoration: none;

  @media screen and (max-width: 820px) {
    padding-left:0;
    padding-right: 1rem;
  }
`

