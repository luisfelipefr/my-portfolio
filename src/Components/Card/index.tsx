import React from "react";
import { Container } from "./styles";
import BackgroundCard from "../../../assets/images/imgTest.svg";
interface CardProps {
  title: string;
  text?: string;
  ImgCard: string;
  url: string;
  buttonText: string;
}

export function Card(props: CardProps) {
  return (
    <Container Img={props.ImgCard}>
      <div className="card-content">
        <h1 className="card-title">{props.title}</h1>
        <p className="card-body">{props.text}</p>
        <a href={props.url} className="button">
          {props.buttonText}
        </a>
      </div>
    </Container>
  );
}
