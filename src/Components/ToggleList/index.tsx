import React from "react";
import { Container, Technologies, Title } from "./styles";

interface List {
  Text: string;
}

export function ToggleList(props: List) {
  return (
    <Container>
      <Technologies>{props.Text}</Technologies>
    </Container>
  );
}
