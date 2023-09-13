import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  height: 100vh;

  align-items: center;
  justify-content: center;

  font-family: "Poppins", sans-serif;
  h1 {
    color: #2d2e32;
    font-size: 5.5rem;
    line-height: 1.2;
    margin-bottom: 2rem;
    margin-top: 2rem;
    color: #2d2e32;
    font-size: 5.5rem;
  }
  p {
    color: #767676;
    font-family: Mulish, sans-serif;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.5;
  }

  .content {
    display: flex;

    justify-content: center;
  }
  .informations {
    display: flex;
    flex-direction: column;
    max-width: 57rem;
    position: relative;
    height: 100%;
    gap: 10rem;
  }

  .box {
    position: relative;
    width: 380px;
    height: 0; /* Começa com altura zero, para que a caixa apareça de cima para baixo */
    background: #e4b04c;
    animation: slideIn 2s forwards, expandHeight 2s forwards, fadeIn 2s forwards;
  }

  .box img {
    width: 100%;
    height: auto;
  }

  @keyframes slideIn {
    to {
      transform: translateY(-100%); /* Move a caixa para baixo */
    }
  }

  @keyframes expandHeight {
    to {
      height: 473px; /* Expande a altura para o valor desejado */
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 1; /* Torna-se visível */
    }
  }

  .box img {
    position: absolute;
    top: 0;
    right: 30%; /* Começa fora da caixa à direita */
    animation: slideIn 0.4s forwards, fadeIn 0.5s ease 1s forwards; /* Duração da animação: 2 segundos */
    opacity: 0;
  }

  @keyframes slideIn {
    to {
      right: 0; /* Termina dentro da caixa à esquerda */
    }
  }
  @keyframes fadeIn {
    to {
      opacity: 1; /* Torna-se visível */
    }
  }
  .icons {
    display: flex;
  }
  .skills ul li .icon-img {
    height: 7rem;
    width: 7rem;
  }
  .skills ul li {
    background-color: #fff;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
    cursor: pointer;
    display: flex;
  }
  ul {
    gap: 2rem;
    display: flex;
    padding: 0;
  }
  .icons ul {
    display: flex;
    justify-content: center;
    list-style: none;
    opacity: 0; /* Inicialmente, esconda os ícones */
    animation: fadeIn 0.5s ease 2s forwards; /* Inicie a animação após 2 segundos */
  }

  @keyframes fadeIn {
    to {
      opacity: 1; /* Ao final da animação, defina a opacidade como 1 */
    }
  }

  .icon-img {
    width: 50px; /* Defina o tamanho dos ícones */
    height: 50px;
    margin: 0 10px; /* Espaçamento entre os ícones */
  }
  @media (max-width: 768px) {
    justify-content: column-reverse;
    .icons {
      justify-content: center;
    }
    .content {
      flex-direction: column-reverse;
      align-items: center;
      gap: 3rem;
    }
    .box {
      height: 10px;
      width: 200px;
      top: 10%;
    }
    .box img {
      left: 15%;
      height: 220px;
      width: 150px;
    }
    .informations {
      max-width: none;
      text-align: center;
      gap: 5rem;
      justify-content: center;
    }
    @keyframes expandHeight {
      to {
        height: 300px; /* Expande a altura para o valor desejado */
      }
    }
    h1 {
      font-size: 3.5rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 14px;
      line-height: 1.4;
    }
    .skills ul li .icon-img {
      height: 5rem;
      width: 5rem;
    }
    .box img {
      position: absolute;
      top: 0;
      right: 20%;
      animation: slideInMobile 0.4s forwards, fadeIn 0.5s ease 1s forwards;
      opacity: 0;
      @media (max-width: 768px) {
        right: 0;
      }
    }

    @keyframes slideInMobile {
      to {
        right: 0;
      }
    }
  }
  li {
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
