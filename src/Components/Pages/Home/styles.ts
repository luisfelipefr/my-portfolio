import styled from "styled-components";
import bgImage from "../../../assets/images/background.png"

export const Background = styled.div`
  background: url(${bgImage});
  height: 100vh;
`;

export const Container = styled.div`
  
  height: 100vh;
  margin: 0 auto;
  max-width: 85.75rem;
  height: 100vh;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-top: 2.6rem;
    font-weight: 500;
    font-size: 18px;
  }
  p.styled {
    color: var(--green);
    font-size: 0.875rem;
    font-weight: 700;
  }
  .titleStyled {
    font-size: 2rem;
    font-weight: 500;
    line-height: 44px;
  }
`;

export const Title = styled.h1``;

export const Subtitle = styled.h2`
  line-height: 44px;
`;
