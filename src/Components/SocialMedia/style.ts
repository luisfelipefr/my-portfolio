import styled from "styled-components";

export const Container = styled.div`
  float: right;
  align-items: flex-end;
  .icon {
    color: #ffffff;
    position: relative;     
    border-radius: 50%;
    padding: 15px;
    margin: 10px;
    width: 40px;
    height: 40px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background-color: #ffffff;
    color: #ffffff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background-color: #ffffff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .icon:hover span,
  .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  .twitter:hover,
  .twitter:hover .tooltip,
  .twitter:hover .tooltip::before {
    background-color: #333333;
    img {
      color: #ffffff;
    }
  }

  .instagram:hover,
  .instagram:hover .tooltip,
  .instagram:hover .tooltip::before {
    background-color: #333333;
    color: #ffffff;
  }

  .github:hover,
  .github:hover .tooltip,
  .github:hover .tooltip::before {
    background-color: #333333;
    color: #ffffff;
  }

  .linkedin:hover,
  .linkedin:hover .tooltip,
  .linkedin:hover .tooltip::before {
    background-color: #333333;
    color: #ffffff;
  }

  .codepen:hover,
  .codepen:hover .tooltip,
  .codepen:hover .tooltip::before {
    background-color: #333333;
    color: #ffffff;
  }


`;
