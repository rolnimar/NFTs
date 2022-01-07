import React, {useState} from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { HomePageWrapper } from './HomePageElements';
import TeamSection from '../components/TeamSection';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggle = () => {
    setIsOpen(!isOpen);
  }


  return (
    <>
    
      <HomePageWrapper >
      
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection  {...homeObjOne}/>
        <InfoSection  {...homeObjTwo}/>
        <InfoSection  {...homeObjThree}/>
        <TeamSection id='team'/>
        <Footer />
        </HomePageWrapper>
    </>
  );
};

export default Home