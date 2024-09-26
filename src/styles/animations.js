import { keyframes } from 'styled-components';

export const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px #00FFFF; }
  50% { box-shadow: 0 0 20px #00FFFF, 0 0 30px #00FFFF; }
  100% { box-shadow: 0 0 5px #00FFFF; }
`;

export const glowPinkAnimation = keyframes`
  0% { box-shadow: 0 0 5px #FF00FF; }
  50% { box-shadow: 0 0 20px #FF00FF, 0 0 30px #FF00FF; }
  100% { box-shadow: 0 0 5px #FF00FF; }
`;