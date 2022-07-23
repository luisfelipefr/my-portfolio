import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Form } from "../../Form";
import { Container, Title } from "./styles";
import ScrollReveal from "scrollreveal";
import { initScrollReveal } from "../../../../InitScrollReveal";

export function Contact() {
  initScrollReveal();
  const { t } = useTranslation();
  return (
    <Container id="Contact" >
      <h1 className="delaySmallReveal">
        <span>04.</span> {t("translation.contact.contact")}
      </h1>
      <Form />
    </Container>
  );
}
