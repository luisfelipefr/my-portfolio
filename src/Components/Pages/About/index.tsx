import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ToggleList } from "../../ToggleList";
import { Container, Text } from "./styles";
import ScrollReveal from "scrollreveal";

export function About() {
  const { t } = useTranslation();
  return (
    <Container id="About">
      <h1>
        <span>02.</span> {t("translation.about.about")}
      </h1>
      <div>
        <Text>{t("translation.about.text1")}</Text>
        <Text>
          {t("translation.about.text2.first")}{" "}
          <span>{t("translation.about.text2.span1")}</span>{" "}
          {t("translation.about.text2.secondary")}{" "}
          <span>{t("translation.about.text2.span2")}</span>{" "}
          {t("translation.about.text2.third")}{" "}
          <span>{t("translation.about.text2.span3")}</span>
        </Text>
        <Text>{t("translation.about.text3")}</Text>
        <div className="list">
          <ToggleList Text="> JavaScript(ES6+)" />
          <ToggleList Text="> TypeScript" />
          <ToggleList Text="> Styled-component" />
          <ToggleList Text="> React Native" />
          <ToggleList Text="> ReactJS" />
        </div>
      </div>
    </Container>
  );
}
