import { Card } from "../../Card";
import { CardContainer, Container } from "./styles";
import linktreeBackgroundCard from "../../../assets/images/linkst.png";
import { useTranslation } from "react-i18next";

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
      </CardContainer>
    </Container>
  );
}
