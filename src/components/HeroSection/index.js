import React from 'react'
import useWindowDimensions from '../../utils/windowDimensions'
import Video from '../../videos/FilmStrip.mp4'
import { HeroBg, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'


const HeroSection = () => {

  const {height,width} = useWindowDimensions();
  
  return (
    <HeroContainer id="home" height={height} >
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mov' />
      </HeroBg>
      <HeroContent>
        <HeroH1>NFTs? O_o</HeroH1>
        <HeroP>Lorem <strong>ipsum</strong> dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</HeroP>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
