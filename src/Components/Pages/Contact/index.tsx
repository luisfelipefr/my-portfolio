import React from "react";
import { useTranslation } from "react-i18next";
import { Form } from "../../Form";
import { Container, Title } from "./styles";

export function Contact() {
  const { t } = useTranslation();
  return (
    <Container id="Contact">
      <h1>
        <span>04.</span> {t("translation.contact.contact")}
      </h1>
      <Form />
    </Container>
  );
}
