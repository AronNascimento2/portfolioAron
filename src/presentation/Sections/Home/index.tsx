import { Header } from "../../Components/Header";
import * as S from "./styles";

export const Home = () => {
  return (
    <S.Container>
      <Header />
      <div className="content">
        <div className="informations">
          <h1>Desenvolvedor Front-End</h1>
          <div className="button">
            Download CV/Resume
            <a href="assets/curriculoAron.pdf" download>
              <img
                className="flags"
                src="assets/brazilflag.png"
                style={{ width: "40px", position: "relative", top: "3px" }}
                alt="flags"
              />
            </a>
            or
            <a href="assets/resumeAron.pdf" download>
              <img
                className="flags"
                src="assets/euaflag.png"
                style={{
                  width: "30px",
                  height: "20px",
                  position: "relative",
                  top: "3px",
                }}
                alt="flags"
              />
            </a>
          </div>
        </div>
        <div className="box">
          <img className="photo" src="assets/aron2.jpg" alt="" />
        </div>
      </div>
      <div className="button button-responsive download-button">
        Download CV/Resume
        <a className="download-button" href="assets/curriculoAron.pdf" download>
          <img
            className="flags"
            src="assets/brazilflag.png"
            style={{ width: "40px", position: "relative", top: "3px" }}
            alt="flags"
          />
        </a>
        or
        <a className="download-button" href="assets/resumeAron.pdf" download>
          <img
            className="flags"
            src="assets/euaflag.png"
            style={{
              width: "30px",
              height: "20px",
              position: "relative",
              top: "3px",
            }}
            alt="flags"
          />
        </a>
      </div>
    </S.Container>
  );
};
