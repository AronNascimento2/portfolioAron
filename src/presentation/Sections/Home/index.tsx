import { Header } from "../../Components/Header";
import * as S from "./styles";

export const Home = () => {
  return (
    <S.Container>
      <Header />
      <div className="content">
        <div className="informations">
          <h1>Desenvolvedor Front-End</h1>
          <a href="assets/curriculoAron.pdf" download>
            <button className="button">Download CV</button>
          </a>
        </div>
        <div className="box">
          <img className="photo" src="assets/aron2.jpg" alt="" />
        </div>
      </div>
      <a className="download-button" href="assets/curriculoAron.pdf" download>
        <button className="button button-responsive">Download CV</button>
      </a>
    </S.Container>
  );
};
