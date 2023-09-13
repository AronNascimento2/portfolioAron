import * as S from "./styles";

export const Home = () => {
  return (
    <S.Container>
      <div className="content">
        <div className="informations">
          <div>
            <h1>Front-End React Developer</h1>
            <p>
              Hi, I'm Aron Nascimento. A passionate Front-end React Developer
              based in São Paulo, Brasil.
            </p>
          </div>
          <div className="skills">
            <div className="icons">
              <ul>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                  >
                    {" "}
                    <img className="icon-img" src="./src/assets/js.png" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
                    target="_blank"
                  >
                    {" "}
                    <img className="icon-img" src="./src/assets/html.png" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    target="_blank"
                  >
                    {" "}
                    <img className="icon-img" src="/src/assets/css.png" />
                  </a>
                </li>

                <li>
                  <a href="https://react.dev/" target="_blank">
                    <img className="icon-img" src="/src/assets/react.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="box">
          <img className="photo" src="src/assets/aron1.png" alt="" />
        </div>
      </div>
    </S.Container>
  );
};
