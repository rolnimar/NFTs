import React, {useState} from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import useWindowDimensions from '../utils/windowDimensions';
import { HomePageWrapper } from './HomePageElements';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const {height,width} = useWindowDimensions();
  
  return (
    <>
      <HomePageWrapper>
      </HomePageWrapper>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <Footer />
      
    </>
  );
};

export default Home