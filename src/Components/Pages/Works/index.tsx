import React, { useEffect } from "react";
import { Card } from "../../Card";
import { CardContainer, Container } from "./styles";
import pomoBackgroundCard from "../../../assets/images/move-pomodor.png";
import linktreeBackgroundCard from "../../../assets/images/linkst.png";
import { useTranslation } from "react-i18next";
import ScrollReveal from "scrollreveal";

export function Works() {
  const { t } = useTranslation();
  return (
    <Container id="Work">
      <h1>
        <span>03.</span> {t("translation.work.work")}
      </h1>
      <CardContainer>
        <Card
          ImgCard={linktreeBackgroundCard}
          title={t("translation.work.card1.title")}
          text={t("translation.work.card1.text")}
          GithubUrl="https://github.com/luisfelipefr/my-linktree"
          ExternalUrl="https://links.luigifr.com"
          technologies="React, TypeScript, Styled-Components"
        />
        <Card
          ImgCard={pomoBackgroundCard}
          title={t("translation.work.card2.title")}
          text={t("translation.work.card2.text")}
          GithubUrl="https://github.com/luisfelipefr/pomofocus-next"
          ExternalUrl="https://pomo.luigifr.com/"
          technologies="React, Next.js, TypeScript"
        />
      </CardContainer>
    </Container>
  );
}
