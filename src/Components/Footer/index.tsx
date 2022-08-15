import { useTranslation } from "react-i18next";
import { Lang } from "../Lang";
import { Container, Copyright } from "./styles";


export function Footer() {
  const { t } = useTranslation();
  return (
    <Container>
      <Copyright>
      {t("copyright")}
      </Copyright>
    </Container>
  );
}
