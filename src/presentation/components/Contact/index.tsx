import * as S from "./styles";

export const Contact = () => {
  return (
    <S.Container>
      <div className="content-contact">
        <div className="content-title">
          <h2 className="content__title">Contact</h2>
          <h3>Feel free to reach out! We're here to chat! 🌟</h3>
        </div>

        <div className="content-icons">
          <a
            href="https://www.linkedin.com/in/aron-nascimento-desenvolvedor/"
            target="_blank"
          >
            <div className="content__icon-box">
              <span>
                {" "}
                <img className="icon-img" src="assets/linkedin.png" />
              </span>
            </div>
          </a>
          <a href="https://github.com/AronNascimento2" target="_blank">
            <div className="content__icon-box">
              <span>
                <img className="icon-img" src="assets/github.png" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </S.Container>
  );
};
