import React from "react";

import {  Card, Container } from "./styles";

export function Successfully() {
  return (
    <Container>
      <Card>
      <h1>Thanks!</h1>
      <p>The form was submitted successfully.</p>
      <a href="/" tabIndex={1}>
        Voltar
      </a>
      </Card>
    </Container>
  );
}
