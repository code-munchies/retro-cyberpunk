import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #00ff00;
  border-top: 5px solid #000000;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite, ${pulse} 1s ease-in-out infinite;
`;

const LoadingAnimation = () => (
  <LoadingContainer>
    <Spinner />
  </LoadingContainer>
);

export default LoadingAnimation;