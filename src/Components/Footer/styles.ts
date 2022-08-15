import styled from "styled-components";

interface INav {
  click: boolean;
}

export const Container =  styled.div`
   /* margin: 0 auto;
  max-width: 85.75rem; */
  width: 100%;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.5rem;
  box-shadow: 0px 2px 11px 2px #000;

  min-height: 80px;
`;

export const Copyright = styled.p`
  font-size: 0.8rem;
`;