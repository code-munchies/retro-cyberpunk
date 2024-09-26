import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { glowAnimation } from '../styles/animations';

const StyledNavButton = styled(Link)`
  background-color: #222;
  color: #00FF00;
  border: 1px solid #00FF00;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #00FF00;
    z-index: -1;
    filter: blur(5px);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    color: #000;
    background-color: #00FF00;
    box-shadow: 0 0 10px #00FF00;
    transform: translateY(-2px);
    animation: ${glowAnimation} 1.5s infinite;
  }

  &:hover:before {
    opacity: 1;
  }

  &:active {
    transform: translateY(0);
  }
`;

const NavButton = ({ to, children }) => {
  return <StyledNavButton to={to}>{children}</StyledNavButton>;
};

export default NavButton;