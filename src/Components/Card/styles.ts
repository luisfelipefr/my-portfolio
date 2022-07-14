import styled from "styled-components";
import { Background } from './../Pages/Home/styles';
interface Bg {
  Img: string | undefined;
}

export const Container = styled.div<Bg>`
  --padding: 1.5rem;
  max-width: 35ch;
 
 
  margin: 2rem 2rem;
  background: url(${props => props.Img}) no-repeat center;
  background-size: cover;
  border-radius: 0.5rem;
  color: var(--text-body);
  padding: 10rem 0 0;
  overflow: hidden;
  
  .card-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--padding);
    min-height: 20rem; 
    min-width: 23rem;
    background: linear-gradient(
      hsl( 0 0% 0% / 0),
      hsl( 20 0% 0% / 0.3) 20%,
      hsl( 0 0% 0% / 1)
    );
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
      bottom: 0;
      background-color: var(--green);
    };
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
`