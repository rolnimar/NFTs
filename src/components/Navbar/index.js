import React, { useEffect, useState } from 'react';
import { MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements';
import {FaBars, FaLandmark, FaLinux} from 'react-icons/fa';
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
                            <NavLinks to={homeObjOne.id}
                            smooth={true} duration={700} spy={true} exact='true' offset={-80}  >{homeObjOne.name}</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={homeObjTwo.id}
                            smooth={true} duration={700} spy={true} exact='true' offset={-80} >{homeObjTwo.name}</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={homeObjThree.id}
                            smooth={true} duration={700} spy={true} exact='true' offset={-80} >{homeObjThree.name}</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
