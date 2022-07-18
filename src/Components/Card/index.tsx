import React from "react";
import { Container, ExternalLinkIcon, GithubIcon, Links } from "./styles";
import BackgroundCard from "../../../assets/images/imgTest.svg";
import { Technologies } from "./../ToggleList/styles";
import { FiGithub } from "react-icons/fi";
interface CardProps {
  title: string;
  text?: string;
  technologies: string;
  ImgCard: string;
  GithubUrl: string;
  ExternalUrl: string;
}

export function Card(props: CardProps) {
  return (
    <Container Img={props.ImgCard}>
      <div className="card-content">
        <h1 className="card-title">{props.title}</h1>
        <p className="card-body">{props.text}</p>
        <p className="card-description">
          <span>Technologies:</span> {props.technologies}
        </p>
        <Links>
          <a
            href={props.GithubUrl}
            aria-label="Github"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GithubIcon aria-label="Github"/>
          </a>
          <a
            href={props.ExternalUrl}

            aria-label="External Link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ExternalLinkIcon aria-label="Github"/>
          </a>
        </Links>
      </div>
    </Container>
  );
}
