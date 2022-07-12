import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  
  min-height: 100vh;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 1.5rem;
    color: var(--green);
    font-weight: 800;
  }

  p {
    font-size: 1rem;
  }

  a {
    font-weight: 600;
    font-size: 1rem;
    line-height: 2.12rem;
    text-align: center;
    padding: 1rem;
    border-radius: 0.5rem;
    width: 8rem;
    height: 4rem;
    margin-top: 3.12rem;
    border: 1px solid var(--green);
    background: var(--green);
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      filter: brightness(0.8);
    }
  }
  @media screen and (min-width: 2560px) {
    h1 {
      font-size: 3em;
    }
    p {
      font-size: 2rem;
    }
    a {
      font-size: 1.3rem;
      width: 10rem;
    height: 4rem;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--background-light);
  min-width: 37rem;
  padding: 2.5rem;

  @media screen and (min-width: 2560px) {
    min-width: 50rem;
  }
  @media screen and (max-width: 550px) {
    min-width: 20rem;
    text-align: center;
  }
  @media screen and (max-width: 320px) {
    max-width: 5rem;
  }
`;
