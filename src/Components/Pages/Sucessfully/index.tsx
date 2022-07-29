import React from "react";
import { useTranslation } from "react-i18next";
import { Card, Container } from "./styles";

export function Successfully() {
  const { t } = useTranslation();
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
