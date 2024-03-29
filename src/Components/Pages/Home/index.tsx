import React, { useEffect } from "react";
import { Background, Container, Subtitle, Title } from "./styles";
import { useTranslation } from "react-i18next";
import ScrollReveal from "scrollreveal";

export function Home() {
  const { t } = useTranslation();
  return (
    <Background>
      <Container id="Home">
        <p className="styled">{t("translation.home.p")}</p>
        <Title>{t("translation.home.title2")}</Title>
        <Subtitle>{t("translation.home.subtitle")}</Subtitle>
        <p>{t("translation.home.psubtitle")}</p>
      </Container>
    </Background>
  );
}
