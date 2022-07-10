import React from "react";
import { Container, Technologies, Title } from "./styles";

interface List {
  Title: string;
  Text: string;
}

export function ToggleList(props: List) {
  return (
    <Container>
      <Title>{props.Title}</Title>
      <Technologies>{props.Text}</Technologies>
    </Container>
  );
}
