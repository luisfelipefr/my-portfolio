import React from "react";
import { Card } from "../../Card";
import { CardContainer, Container } from "./styles";
import BackgroundCard from "../../../assets/images/imgTest.svg";
import LinkBackgroundCard from "../../../assets/images/linkst.png";
export function Works() {
  return (
    <Container id="Work">
      <h1>
        <span>03.</span> Some Things I&#x2019;ve Built
      </h1>
      <CardContainer>
        <Card
          ImgCard={LinkBackgroundCard}
          title="Linktree"
          text="The web app for visualizing my personalized linktree. View my social medias and topic links"
          GithubUrl="https://github.com/luisfelipefr/my-linktree"
          ExternalUrl="https://links.luigifr.com"
          technologies="React, TypeScript, Styled-Components"
        />
        <Card
          ImgCard={BackgroundCard}
          title="coming soon"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti praesentium sint repellat animi exercitationem, odit id alias voluptatum earum rerum illo aut ratione ducimus molestias obcaecati sit laborum, numquam minima"
          technologies="..."
          GithubUrl="#"
          ExternalUrl="#"
          
        />
        
      </CardContainer>
    </Container>
  );
}
