import styled from "styled-components";

interface INav {
  click: boolean;
}

export const LangSelect = styled.div<INav>`
  display: block;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  min-height: 3px;
  padding: 0.5rem 1rem;
  height: 100%;
  button {
    margin: 1px;
  }
  li {
    list-style: none;
    min-width: 173.25px;
    max-width: 173.25px;
  }

  .dropdown-toggle {
    background-color: var(--background-card);
    border: 1px solid var(--green);
    color: var(--text-light);
    font-size: 1rem;
  }

  .button-wrapper {
    display: flex;
    gap: 0.25rem;
    padding: 0.25rem;
    align-items: center;
  }

  .dropdown-menu {
    align-self: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;  
    }
  }

  .dropdown-menu li {
    background-color: var(--background-card);
    color: var(--text-light);
    margin: 0.1rem;
    display: ${(props) => (props.click ? "none" : "flex")};
    align-content: flex-start;
    cursor: pointer;
    :hover {
      filter: brightness(0.8);
    }
  }
  a {
    width: 100%;
    padding: .5rem;
  }
`;
