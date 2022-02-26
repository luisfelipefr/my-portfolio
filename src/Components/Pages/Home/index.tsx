import React from "react";
import { SocialMedia } from "../../SocialMedia";
import { About } from "../../About";
import { Container, Subtitle, Title } from "./styles";

export function Home() {
  return (
    <Container>
      <p className="styled">introducing</p>
      <Title className="titleStyled">Hello</Title>
      <Title>I'm Luis Felipe.</Title>
      <Subtitle>I build things for the web.</Subtitle>
      <p>I&#x2019;m a Front-end developer.</p>
    </Container>
  );
}
