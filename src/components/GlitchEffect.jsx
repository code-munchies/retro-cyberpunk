import React from 'react';
import styled, { keyframes } from 'styled-components';

const glitch = keyframes`
  0%, 98%, 100% {
    clip: rect(0, 9999px, 0, 0);
    transform: skew(0deg);
  }
  98.5% {
    clip: rect(31px, 9999px, 94px, 0);
    transform: skew(0.85deg);
  }
  99% {
    clip: rect(70px, 9999px, 74px, 0);
    transform: skew(0.17deg);
  }
  99.5% {
    clip: rect(21px, 9999px, 54px, 0);
    transform: skew(0.01deg);
  }
`;

const GlitchContainer = styled.div`
  position: relative;
  display: inline-block;

  &:before,
  &:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
  }

  &:before {
    left: 2px;
    text-shadow: -2px 0 #ff00c1;
    animation: ${glitch} 20s infinite linear alternate-reverse; 
  }

  &:after {
    left: -2px;
    text-shadow: -2px 0 #00fff9;
    animation: ${glitch} 30s infinite linear alternate-reverse; 
  }
`;

const GlitchEffect = ({ children, ...props }) => {
  return (
    <GlitchContainer data-text={children} {...props}>
      {children}
    </GlitchContainer>
  );
};

export default GlitchEffect;