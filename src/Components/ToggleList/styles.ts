import styled from "styled-components";

export const Container = styled.div`
  display: flex;
 
  margin: 39px 22px 40px 0;
`;

export const Title = styled.h1`
  color: var(--green);
  font-size: 0.875rem;
  
`;

export const Technologies = styled.h1`
  color: var(--shape);
  font-size: 0.875rem;
  margin-left: 13px;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    color: var(--green);
  }
`;