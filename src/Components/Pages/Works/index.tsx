import React, { useEffect } from "react";
import { Card } from "../../Card";
import { CardContainer, Container } from "./styles";
import BackgroundCard from "../../../assets/images/imgTest.svg";
import LinkBackgroundCard from "../../../assets/images/linkst.png";
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
          ImgCard={LinkBackgroundCard}
          title={t("translation.work.card1.title")}
          text={t("translation.work.card1.text")}
          GithubUrl="https://github.com/luisfelipefr/my-linktree"
          ExternalUrl="https://links.luigifr.com"
          technologies="React, TypeScript, Styled-Components"
        />
        <Card
          ImgCard={BackgroundCard}
          title={t("translation.work.card2.title")}
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti praesentium sint repellat animi exercitationem, odit id alias voluptatum earum rerum illo aut ratione ducimus molestias obcaecati sit laborum, numquam minima"
          technologies="..."
        />
      </CardContainer>
    </Container>
  );
}
