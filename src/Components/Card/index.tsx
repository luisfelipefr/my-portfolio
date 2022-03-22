import React from "react";
import { Container } from "./styles";
import BackgroundCard from "../../../assets/images/imgTest.svg";
interface CardProps {
  title: string;
  text?: string;
  ImgCard: string;
}

export function Card(props: CardProps) {
  return (
    <Container Img={props.ImgCard}>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </Container>
  );
}
