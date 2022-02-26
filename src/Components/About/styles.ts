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
 
  span {
    color: var(--green);
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    
  }
`;

export const Text = styled.p`
  font-size: 1.625rem;
  line-height: 32px;
  max-width: 49rem;
  margin-top: 45px;
`;
