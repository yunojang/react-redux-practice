import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NanumSquareRound';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }

  * {
    font-family: "NanumSquareRound";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    height: 100vh;
  }
`;

export default GlobalStyle;
