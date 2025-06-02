import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  padding: 0.5rem;
  z-index: 10;
  bottom: 20px;
  right: 20px;  
  button {
     border-radius: 50%;
     width: 4rem;
     height: 4rem;
     background-color: var(--background-card);
     border: 0;
     transition: all 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  img {
    width: 2rem;
    height: 2rem;
  }
  button:hover {
    background-color: var(--background-light);
    width: 5rem;
    height: 5rem;
  }
`;
