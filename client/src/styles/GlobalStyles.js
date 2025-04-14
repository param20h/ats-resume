import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: #333;
  }

  p {
    line-height: 1.6;
    color: #555;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  input, textarea, select {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    padding: 10px 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: border-color 0.3s ease;
    outline: none;

    &:focus {
      border-color: #4a6cf7;
    }
  }

  a {
    text-decoration: none;
    color: #4a6cf7;
    transition: color 0.3s ease;

    &:hover {
      color: #2e4dd4;
    }
  }
`;

export default GlobalStyles;
