import { useTranslation } from "react-i18next"
import { Container } from "./style";
import CurriculumImg  from "../../assets/icons/curriculum.svg"

export function Curriculo() {
    const { t } = useTranslation();
    return(
      <Container>
        <div className="icon">
          <a href="https://curriculo.luigifr.com" target="_blank" rel="noopener nofererrer" ><button><img src={CurriculumImg} alt="icone de curriculo" /></button></a>
        </div>
      </Container>
    )
    
}