import styled from "styled-components";

export const Container = styled.div`
  
  .Form {
    margin-top: 4.13rem;
    display: flex;
    flex-wrap: wrap;
    min-width: 47.25rem;
    
  }
  .form_invite {
    .form_input input,
    .form_select select {
      margin-top: 50px;
      color: var(--shape);
      width: 43.75rem;
      padding: 1rem;
      border-radius: 5px;
      border: 2px solid var(--green);
      background-color: var(--background);
    }
    textarea {
      margin-top: 50px;
      border-radius: 5px;
      padding: 1rem;
      width: 43.625rem;

      resize: none;
      height: 228px;
      max-height: 14.25rem;
      color: var(--shape);
      border: 2px solid var(--green);
      background-color: var(--background);
    }
    .form_input input.input_your-messenger {
      height: 228px;
    }
    .form_input input::placeholder,
    textarea::placeholder {
      color: var(--shape);
    }
    input.input_your-messenger {
    }
    .form_button button {
      font-weight: 600;
      font-size: 1.75rem;
      line-height: 2.12rem;
      text-align: center;
      padding: 1rem;
      border-radius: 0.5rem;
      width: 12rem;
      height: 4.5rem;
      margin-top: 3.12rem;
      border: 2px solid var(--green);
      background-color: var(--green);
      color: var(--text-body);
      text-transform: uppercase;
      float: right;
      cursor: pointer;
      &:hover {
        filter: brightness(0.8);
      }
    }
    .control_label {
      position: relative;
      top: 9px;
      left: 18px;
      background-color: var(--background);
      font-size: 0.75rem;
      font-weight: 400;
      color: var(--shape);
    }
  }
  @media screen and (min-width: 1441px) and (max-width: 2000px) {}
  @media screen and (max-width: 600px) {
    .Form {
      min-width: 0;
    }
    .form_input textarea {
      width: 23.75rem;
    }
    .form_invite {
    .form_input input,
    .form_select select {
      width: 23.75rem;
    }
  }
  }
  @media screen and (max-width: 375px) {
    .Form {
      min-width: 0;
    }
    .form_input textarea {
      width: 20.75rem;
    }
    .form_invite {
    .form_input input,
    .form_select select {
      width: 20.75rem;
    }
    .form_button button {
      width: 11rem;
      height: 4rem;
    }
  }
  }
`;