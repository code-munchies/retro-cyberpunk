import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

  body {
    margin: 0;
    padding: 0;
    background-color: #000000;
    color: #00FF00;
    font-family: 'VT323', monospace;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #00FFFF;
    text-shadow: 0 0 10px #00FFFF;
  }

  a {
    color: #FF00FF;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #FFD700;
      text-shadow: 0 0 10px #FFD700;
    }
  }

  @keyframes flicker {
    0% { opacity: 0.8; }
    50% { opacity: 1; }
    100% { opacity: 0.8; }
  }

  .flicker {
    animation: flicker 0.5s infinite alternate;
  }
`;

export default GlobalStyles;