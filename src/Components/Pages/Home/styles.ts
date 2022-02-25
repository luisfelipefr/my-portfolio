import styled from "styled-components";
import bgImage from "../../../assets/images/background.png"

export const Background = styled.div`
  background: url(${bgImage}) no-repeat center ;
  height: 100vh;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 85.75rem;
  height: 100vh;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.5rem;
  
  p {
    margin-top: 2.6rem;
    font-weight: 500;
    font-size: 18px;
  };
  p.styled {
    color: var(--green);
    font-size: 0.875rem;
    font-weight: 700;
  };
  .titleStyled {
    font-size: 2rem;
    font-weight: 500;
    line-height: 44px;
  };
  
  @media screen and (max-width: 1024px) {
   
    
  }
`;

export const Title = styled.h1``;

export const Subtitle = styled.h2`
  line-height: 44px;
`;
