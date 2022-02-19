import { createGlobalStyle } from "styled-components";
import backgroundImg from "../assets/images/bg_teste.png"
export const GlobalStyle = createGlobalStyle`

  :root {
    --green: #1AB86B;
    
    --blue-light: #6933FF;
    --text-decoration: #1AB86B;
    --text-title: #FFFFFF;
    --text-body: #FFFFFF;
    
    --background: #282828;
    --shape: #fff;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
  
  h1, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
  h2 {
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`