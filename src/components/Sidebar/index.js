import React from 'react';
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
              <SidebarLink to='about' onClick={toggle}>
                About
              </SidebarLink>
              <SidebarLink to='prices' onClick={toggle}>
                Prices
              </SidebarLink>
              <SidebarLink to='discover' onClick={toggle}>
                Discover
              </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  );
};
 
export default Sidebar;
