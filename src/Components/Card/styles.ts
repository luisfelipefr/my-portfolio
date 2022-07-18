import styled from "styled-components";
import { Background } from "./../Pages/Home/styles";
import { FiExternalLink, FiGithub } from "react-icons/fi";
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

  border: 1px solid var(--green);

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

  .card-description {
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    color: var(--text-light);
    span {
      color: var(--green);
      font-size: 0.8rem;
      font-weight: 500;
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

export const Links = styled.div`
  display: flex;
  a {
    text-decoration: none;
    padding: 0.5rem;
  }
`;

export const GithubIcon = styled(FiGithub)`
  color: var(--shape);
  width: 1.25rem;
  height: 1.25rem;
  :hover,
  :focus {
    color: var(--green-light);

  }
`;

export const ExternalLinkIcon = styled(FiExternalLink)`
  color: var(--shape);
  width: 1.25rem;
  height: 1.25rem;
  :hover,
  :focus {
    color: var(--green-light);
  }
`;