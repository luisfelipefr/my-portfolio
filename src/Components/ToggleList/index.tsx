import React from "react";
import { Container, Technologies, Title } from "./styles";

interface List {
  Arrow: string;
  Text: string;
}

export function ToggleList(props: List) {
  return (
    <Container>
      <Title>{props.Arrow}</Title>
      <Technologies>{props.Text}</Technologies>
    </Container>
  );
}
