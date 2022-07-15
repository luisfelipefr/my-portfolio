import styled from "styled-components";
import { Background } from "./../Pages/Home/styles";
interface Bg {
  Img: string | undefined;
}

export const Container = styled.div<Bg>`
  --padding: 1.5rem;
  max-width: 35ch;
  margin: 2rem 2rem;
  background: url(${(props) => props.Img}) no-repeat center;
  background-size: cover;
  border-radius: 0.5rem;
  color: var(--text-body);
  padding: 10rem 0 0;
  overflow: hidden;

  transition: transform 500ms ease;

  .card-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--padding);
    min-height: 20rem;
    min-width: 23rem;
    background: linear-gradient(
      hsl(0 0% 0% / 0),
      hsl(20 0% 0% / 0.3) 20%,
      hsl(0 0% 0% / 1)
    );
    transform: translateY(75%);
    transition: transform 500ms ease;
  }

  .card-content > *:not(.card-title) {
    opacity: 0;
    transition: opacity 500ms linear;
  }

  .card-title {
    font-size: 1.5rem;
    width: max-content;
    position: relative;

    ::after {
      content: "";
      position: absolute;
      width: calc(100% + var(--padding));
      height: 3px;
      left: calc(var(--padding) * -1);
      bottom: -2px;
      background-color: var(--green);

      transform: scaleX(0);
      transform-origin: left;
      transition: transform 500ms ease;
    }
  }

  .card-body {
    color: var(--text-light);
    margin: 2rem 0;
  }

  .button {
    display: inline-block;
    text-decoration: none;
    background: var(--green);
    color: var(--text-color);
    padding: 0.5em 1.25em;
    border-radius: 0.5rem;
    :hover,
    :focus {
      filter: brightness(0.8);
    }
  }

  :hover,
  :focus-within {
    transform: scale(1.05);

    .card-title::after {
      transform: scaleX(1);
    }

    .card-content {
      transform: translateY(0);
      transition-delay: 500ms;
    }

    .card-content > *:not(.card-title) {
      opacity: 1;
      transition-delay: 1000ms;
    }
  }

  :focus-within {
    .card-content {
      transition-duration: 0ms;
    }
    .card-content > *:not(.card-title) {
      transition-delay: 300ms;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
