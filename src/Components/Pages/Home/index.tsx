import React from "react";
import { Background, Container, Subtitle, Title } from "./styles";

export function Home() {
  return (
    <Background>
      <Container id="Home">
        <p className="styled">introducing</p>
        <Title className="titleStyled">Hello</Title>
        <Title>I'm Luis Felipe.</Title>
        <Subtitle>I build things for the web.</Subtitle>
        <p>I&#x2019;m a Front-end developer.</p>
      </Container>
    </Background>
  );
}
