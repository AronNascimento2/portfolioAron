import { Skills } from "../../Components/Skills";
import * as S from "./styles";

export const About = () => {
  return (
    <S.Container>
      <h2>SOBRE MIM</h2>
      <div className="wrapper">
        <div className="informations-about">
          <p>
            Olá, meu nome é Aron, sou um desenvolvedor de São Paulo-SP, com uma
            paixão pelo mundo da tecnologia e da programação. Com formação em
            Análise e Desenvolvimento de Sistemas e uma sólida base em lógica de
            programação, estou comprometido em criar soluções de software
            eficazes e elegantes. Além disso, sou violinista e tenho o sonho de
            um dia unir música e tecnologia, explorando as possibilidades
            criativas que surgem dessa combinação única.
          </p>
        </div>
        <div className="content-about">
          <ul>
            <li>
              <p>Nome:</p>
              <p>Aron Nascimento</p>
            </li>
            <li>
              <p>Cargo:</p>
              <p>Desenvolvedor</p>
            </li>
            <li>
              <p>Email:</p>
              <p>aronviniciusnascimento@gmail.com</p>
            </li>
            <li>
              <p>GitHub:</p>
              <p>
                <a href="https://github.com/AronNascimento2" target="_blank">
                  Aronnascimento2
                </a>
              </p>
            </li>
            <li>
              <p>Linkedin:</p>
              <p>
                <a
                  href="https://www.linkedin.com/in/aron-nascimento-desenvolvedor/"
                  target="_blank"
                >
                  Aron Nascimento
                </a>
              </p>
            </li>
          </ul>
          <Skills />
        </div>
      </div>
    </S.Container>
  );
};
