import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const HeaderContainer = styled.header`
  grid-area: header;
  background-color: #111;
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid #00FF00;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Slogan = styled.p`
  color: #FF00FF;
  font-size: 1.2rem;
  margin-top: 0.5rem;
  text-shadow: 0 0 5px #FF00FF;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Slogan>
        "Access to computers and anything which might teach you something about the way the world works should be unlimited and total."
      </Slogan>
    </HeaderContainer>
  );
};

export default Header;