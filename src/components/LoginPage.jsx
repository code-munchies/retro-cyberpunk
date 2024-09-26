import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LoadingAnimation from './LoadingAnimation';

const glowAnimation = keyframes`
  0% { text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00, 0 0 20px #00ff00; }
  50% { text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00; }
  100% { text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00, 0 0 20px #00ff00; }
`;

const flickerAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.8; }
  100% { opacity: 1; }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000000;
  color: #00ff00;
  font-family: 'Courier New', monospace;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  animation: ${glowAnimation} 2s ease-in-out infinite, ${flickerAnimation} 0.5s ease-in-out infinite;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: #111;
  border: 1px solid #00ff00;
  color: #00ff00;
  font-family: 'Courier New', monospace;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #00ff00;
    animation: ${glowAnimation} 2s ease-in-out infinite;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #00ff00;
  color: #000;
  border: none;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: #000;
    color: #00ff00;
    box-shadow: 0 0 10px #00ff00;
    animation: ${glowAnimation} 1s ease-in-out infinite, ${flickerAnimation} 0.3s ease-in-out infinite;
  }
`;

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Login submitted:', { username, password });

    setTimeout(() => {
      onLogin();
      console.log('Navigating to:', '/control-panel');
      navigate('/control-panel');
    }, 2000);
  };

  return (
    <LoginContainer>
      <Title>State of Mind</Title>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Enter</Button>
        </Form>
      )}
    </LoginContainer>
  );
};

export default LoginPage;