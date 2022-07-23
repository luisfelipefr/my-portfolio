import React from "react";
import { initScrollReveal } from "../../../../InitScrollReveal";

import {  Card, Container } from "./styles";

export function Successfully() {
  initScrollReveal();
  return (
    <Container className="delaySmallReveal">
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
