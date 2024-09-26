import React from 'react';
import styled from 'styled-components';
import BackgroundGrid3D from './BackgroundGrid3D';

const DashboardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  z-index: 1;
`;

const Title = styled.h2`
  color: #0ff;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  z-index: 2;
`;

const DashboardView = () => {
  console.log("Rendering DashboardView with Cyberpunk theme");
  return (
    <DashboardContainer>
      <BackgroundGrid3D />
      <Title>Welcome to the Cyberpunk Dashboard</Title>
    </DashboardContainer>
  );
};

export default DashboardView;