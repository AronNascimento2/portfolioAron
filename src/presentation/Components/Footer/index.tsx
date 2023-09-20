import * as S from "./styles";

export const Footer = () => {
  const dataAtual = new Date();

  // Obtém o ano atual
  const anoAtual = dataAtual.getFullYear();
  return (
    <S.Container>
      <p>{`Copyright © .${anoAtual} All rights are reserved`}</p>
    </S.Container>
  );
};
