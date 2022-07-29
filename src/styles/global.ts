import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

  :root {
    --green: #1AB86B;
    --green-light: #13CF3F;
    --green-tint: rgba(100,255,218,0.1);
    
    --blue-light: #6933FF;

    --text-title: #FFFFFF;
    --text-body: #FFFFFF;
    --text-light: #ffffffd9;

    --text-decoration: #1AB86B;
    --text-dark: #000f32;

    --background: #1f1f1e;
    --background-light: #363430;
    --background-card: #2F332E;

    --shape: #fff;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
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

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    height: 4px;
    background-color: var(--green);
    border-radius: 0.5rem;
  }

  
`

export const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--background);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
.loader {
  border: 8px solid var(--green-tint);
  border-radius: 50%;
  border-top: 8px solid var(--green);
  width: 3rem;
  height: 3rem;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;