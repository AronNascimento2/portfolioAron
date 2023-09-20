import * as S from "./styles";

export const Contact = () => {
  return (
    <S.Container>
      <div className="content-contact">
        <div className="content-title">
          <h2 className="content__title">CONTATO</h2>
          <p className="subtitle">
            Sinta-se à vontade para entrar em contato! estamos aqui para
            conversar!🌟
          </p>

          <div className="content-icons">
            <a
              href="https://www.linkedin.com/in/aron-nascimento-desenvolvedor/"
              target="_blank"
            >
              <div className="content__icon-box">
                <img className="icon-img" src="assets/linkedin.png" />
              </div>
            </a>
            <a href="https://github.com/AronNascimento2" target="_blank">
              <div className="content__icon-box">
                <img className="icon-img" src="assets/github.png" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </S.Container>
  );
};
