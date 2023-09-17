import * as S from "./styles";

export const Card = () => {
  const projects = [
    {
      title: "PowerFit",
      video: "assets/gravaçãopowerfit.webm",
      repo: "https://github.com/AronNascimento2/powerfit",
      site: "https://powerfit-gym.vercel.app/",
      description:
        "Um site de academia é um recurso abrangente com informações sobre condicionamento físico, horários de aulas, opções de associação e ferramentas para ajudar os usuários a atingir suas metas de condicionamento físico.",
      stacks: ["React", "Styled-Components"],
    },

    {
      title: "PlayShop",
      video: "assets/gravaçãoplayshop.webm",
      repo: "https://github.com/AronNascimento2/playshop",
      site: "https://playshop-commerce.vercel.app/",
      description: "Projeto fullstack",
      stacks: ["React", "Nodejs", "Docker", "TailwindCSS"],
    },
    {
      title: "PetLux",
      video: "",
      repo: "",
      site: "",
      description: "",
      stacks: ["React", "Nodejs", "Docker"],
    },
    {
      title: "FlixFlow",
      video: "",
      repo: "",
      site: "",
      description: "Projeto fullstack",
      stacks: ["React", "Nodejs", "Docker"],
    },
    {
      title: "Pokedex",
      video: "",
      repo: "",
      site: "",
      description: "",
      stacks: ["Angular"],
    },
  ];

  return (
    <S.Container>
      {projects.map((project) => {
        return (
          <S.Card key={project.title}>
            <span className="title">{project.title}</span>
            <div className="wrapper">
              <S.Video src={project.video} autoPlay loop controls />
              <div className="text">
                <p>{project.description}</p>
                <div className="wrapper-buttons">
                  {project.stacks.map((stack, index) => (
                    <span key={index} className="tech">
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="wrapper-buttons">
              <a href={project.repo} target="_blank">
                <span className="link"> Repositorio</span>
              </a>
              <a href={project.site} target="_blank">
                {" "}
                <span className="link"> Acessar {project.title}</span>
              </a>
            </div>
          </S.Card>
        );
      })}
    </S.Container>
  );
};
