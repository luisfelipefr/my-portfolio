import React from "react";
import { Card } from "../../Card";
import { Container } from "./styles";
import BackgroundCard from "../../../assets/images/imgTest.svg";
export function Works() {
  return (
    <Container id="Work">
      <h1>
        <span>03.</span> Some Things I&#x2019;ve Built
      </h1>
      <div className="cardContainer">
        <Card ImgCard={BackgroundCard} title="coming soon" />
        <Card ImgCard={BackgroundCard} title="coming soon" />
      </div>
    </Container>
  );
}
