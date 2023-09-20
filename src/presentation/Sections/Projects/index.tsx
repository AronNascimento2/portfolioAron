import { CardProjects } from "../../Components/CardProjects";
import * as S from "./styles";

export const Projects = () => {
  return (
    <S.Container>
      <h2 className="content-title">PROJETOS</h2>
      <CardProjects />
    </S.Container>
  );
};
