import React from "react";
import { Container, Technologies, Title } from "./styles";

interface List {
  Arrow: string;
  Text: string;
}
export function ToggleList({Arrow = "", Text = ""}: List) {
  return (
    <Container>
      <Title>{Arrow}</Title>
      <Technologies>{Text}</Technologies>
    </Container>
  );
}
