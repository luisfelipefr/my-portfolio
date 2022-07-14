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
        <Card
          ImgCard={BackgroundCard}
          title="coming soon"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dignissimos debitis at labore, maiores, atque est consequuntur sit repudiandae quaerat quam cum, recusandae culpa temporibus necessitatibus. Iure non rem earum?"
          url="#"
          buttonText="See More"
        />
        <Card
          ImgCard={BackgroundCard}
          title="coming soon"
          text="Lorem"
          url="#"
          buttonText="See More"
        />
      </div>
    </Container>
  );
}
