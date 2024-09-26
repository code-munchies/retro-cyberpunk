import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { Route, Routes } from 'react-router-dom';

const ControlPanelContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  background-color: #000000;
  color: #00FF00;
  font-family: 'VT323', monospace;
`;

const ControlPanel = () => {
  console.log("Rendering ControlPanel", { currentPath: window.location.pathname });
  return (
    <ControlPanelContainer>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<MainContent title="Dashboard" />} />
        <Route path="/posts/*" element={<MainContent title="Posts" />} />
        <Route path="/users" element={<MainContent title="Users" />} />
        <Route path="/settings" element={<MainContent title="Settings" />} />
      </Routes>
    </ControlPanelContainer>
  );
};

export default ControlPanel;