import React, { useEffect, useState } from 'react';
import { MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements';
import {FaBars, FaLandmark} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll'
import { homeObjOne, homeObjThree, homeObjTwo } from '../InfoSection/Data';


const Navbar = ({toggle}) => {
    const [scrollNav,setScrollNav] = useState(false);

    const changeNav=()=>{
        if(window.scrollY >=80){
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)   
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav = {scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}><h1><FaLandmark /> Logo </h1></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to={homeObjOne.id} activecolor = {homeObjOne.bgcolor}
                            smooth={true} duration={700} spy={true} exact='true' offset={-80}  >{homeObjOne.name}</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={homeObjTwo.id} activecolor = {homeObjTwo.bgcolor}
                            smooth={true} duration={700} spy={true} exact='true' offset={-80} >{homeObjTwo.name}</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={homeObjThree.id} activecolor = {homeObjThree.bgcolor}
                            smooth={true} duration={700} spy={true} exact='true' offset={-80} >{homeObjThree.name}</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='team'
                            smooth={true} duration={700} spy={true} exact='true' offset={-80} >Team</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
