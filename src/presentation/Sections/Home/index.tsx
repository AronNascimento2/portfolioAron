import { Header } from "../../Components/Header";
import * as S from "./styles";

export const Home = () => {
  return (
    <S.Container>
      <Header />
      <div className="content">
        <div className="informations">
          <h1>Desenvolvedor Front-End</h1>
          <div className="links">
            <a href="assets/curriculoAron.pdf" download>
              <button className="button">Download CV</button>
            </a>
            <a href="assets/curriculoAron.pdf" download>
              <button className="button">Download Resume</button>
            </a>
          </div>
        </div>
        <div className="box">
          <img className="photo" src="assets/aron2.jpg" alt="" />
        </div>
      </div>
      <div className="links">
        <a className="download-button" href="assets/curriculoAron.pdf" download>
          <button className="button button-responsive">Download CV</button>
        </a>
        <a className="download-button" href="assets/resumeAron.pdf" download>
          <button className="button button-responsive">Download Resume</button>
        </a>
      </div>
    </S.Container>
  );
};
