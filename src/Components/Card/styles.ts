import styled from "styled-components";

interface Bg {
  Img: string | undefined;
}

export const Container = styled.div<Bg>`
  width: 23.3rem;
  height: 34rem;
  margin: 2rem 2rem;
  background-image: url(${props => props.Img});
  border-radius: 0.5rem;
  
  h1 { 
    font-size: 1.5rem;
    color: var(--green);
    text-align: center;
    margin-top: 37px;
  }
  
  box-shadow: -4px 3px 0px 1px #1AB86B;
`