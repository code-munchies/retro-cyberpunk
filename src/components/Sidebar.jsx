import React from 'react';
import styled from 'styled-components';
import NavButton from './NavButton';
import GlitchEffect from './GlitchEffect';

const SidebarContainer = styled.aside`
  grid-area: sidebar;
  background-color: #111;
  padding: 1rem;
  border-right: 1px solid #00FF00;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SidebarTitle = styled.h2`
  color: #FF00FF;
  text-shadow: 0 0 10px #FF00FF;
  margin-bottom: 1rem;
`;

const Sidebar = () => {
  console.log("Rendering Sidebar component");
  return (
    <SidebarContainer>
      <GlitchEffect>
        <SidebarTitle>Navigation</SidebarTitle>
      </GlitchEffect>
      <NavButton to="/dashboard">Dashboard</NavButton>
      <NavButton to="/posts">Posts</NavButton>
      <NavButton to="/users">Users</NavButton>
      <NavButton to="/settings">Settings</NavButton>
    </SidebarContainer>
  );
};

export default Sidebar;