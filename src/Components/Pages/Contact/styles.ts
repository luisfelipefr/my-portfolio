import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 85.75rem;
  min-height: 100vh;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.5rem;

  span{
    color: var(--green);
  }
  
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.5rem;
`;