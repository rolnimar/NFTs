import React from 'react';
import { homeObjOne, homeObjThree, homeObjTwo } from '../InfoSection/Data';
import { SidebarContainer, SidebarMenu,Icon, CloseIcon,SidebarWrapper, SidebarLink } from './SidebarElements';

const Sidebar = ({isOpen,toggle}) => {
  return (
    <div>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
              <SidebarLink to={homeObjOne.id} onClick={toggle}
              smooth={true} duration={700} spy={true} exact='true' offset={-80}>
                {homeObjOne.name}
              </SidebarLink>
              <SidebarLink to={homeObjTwo.id} onClick={toggle}
              smooth={true} duration={700} spy={true} exact='true' offset={-80}>
                {homeObjTwo.name}
              </SidebarLink>
              <SidebarLink to={homeObjThree.id} onClick={toggle}
              smooth={true} duration={700} spy={true} exact='true' offset={-80}>
                {homeObjThree.name}
              </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  );
};
 
export default Sidebar;
