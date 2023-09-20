import { skills } from "../../../data/skills";
import { SkillsModel } from "../../../domain/models/skillsModel";
import * as S from "./styles";

export const Skills = () => {
  const iconsSkills: SkillsModel[] = skills;
  return (
    <S.Container>
      <span className="sub-title">Habilidades</span>
      <div>
        {iconsSkills.map((icon) => {
          return (
            <img
              key={icon.id}
              alt="Aron-Js"
              height="50"
              width="70"
              src={icon.icon}
            />
          );
        })}
        <i className="devicon-nextjs-plain"></i>
      </div>
    </S.Container>
  );
};
