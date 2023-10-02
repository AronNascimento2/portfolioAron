import { useState } from "react";
import * as S from "./styles";
import { projects } from "../../../data/projects";
import { ProjectModel } from "../../../domain/models/projectsModel";

export const CardProjects = () => {
  const [open, setOpen] = useState<number | null>(null);

  const handleOpen = (projectId: number | null) => {
    setOpen(projectId);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const listProjects: ProjectModel[] = projects;

  return (
    <S.Container>
      {listProjects.map((project) => {
        return (
          <div key={project.id}>
            <S.Card
              onClick={
                !project.site
                  ? () => handleOpen(null)
                  : () => handleOpen(project.id ?? null)
              }
            >
              {project.thumbnail ? (
                <img className="preview" src={project.thumbnail} />
              ) : (
                <div className="preview">EM BREVE</div>
              )}
              <div className="title-project">
                <p>{project.title}</p>
              </div>
            </S.Card>
            {open === project.id && (
              <>
                <div className="backdrop" onClick={handleClose}></div>
                <S.Modal>
                  <div className="header">
                    <img
                      onClick={handleClose}
                      src="assets/closeIcon.png"
                      alt=""
                    />
                  </div>
                  <span className="title">{project.title}</span>
                  <div className="wrapper">
                    <S.Video src={project.video} autoPlay loop controls />
                    <div className="text">
                      <p className="techno">Descrição:</p>
                      <p className="description">{project.description}</p>
                      {project.observation &&
                        <><p className="techno">Observações:</p><p className="description">{project.observation}</p></>
                      }

                      <div className="stacks">
                        <p className="techno">Tecnologias:</p>
                        <div className="techs">
                          {project.stacks.map((stack) => (
                            <span key={stack} className="tech">
                              {stack}
                            </span>
                          ))}
                        </div>
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
                </S.Modal>
              </>
            )}
          </div>
        );
      })}
    </S.Container>
  );
};
