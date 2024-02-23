import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;

  font-family: "Poppins", sans-serif;
  .button {
    width: 250px;
    height: 45px;
    border-radius: 25px;
    background-color: #e4b04c;
    color: #f9f9f9;
    font-weight: 600;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
    border: none;
    color: #111111;
  }
  .button-responsive {
    display: none;
  }
  h1 {
    color: #f9f9f9;
    font-size: 5.5rem;
    line-height: 1.2;
    margin-bottom: 2rem;
    margin-top: 2rem;
    color: #f9f9f9;
    font-size: 5.5rem;
  }
  p {
    color: #f9f9f9;
    font-family: Mulish, sans-serif;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.5;
  }

  .informations {
    opacity: 0;
    animation: fadeInContent 1s ease-in-out 1s forwards;
  }

  .box {
    opacity: 0;
    animation: fadeInBox 1s ease-in-out 0.5s forwards;
  }
  .download-button {
    opacity: 0;
    animation: fadeInContent 1s ease-in-out 3s forwards;
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @keyframes fadeInContent {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeInBox {
    from {
      opacity: 0; /* Começa com a opacidade 0 (elemento invisível) */
    }
    to {
      opacity: 1; /* Termina com a opacidade 1 (elemento totalmente visível) */
    }
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
    button {
      &:hover {
        cursor: pointer;
      }
    }
  }

  .box {
    position: relative;
    width: 380px;
    height: 610px; /* Começa com altura zero, para que a caixa apareça de cima para baixo */
    background: #e4b04c;
  }

  .box img {
    position: absolute;
    width: 400px;
    height: 600px;
    left: 10px;
    top: 6px;
    right: 30%; /* Começa fora da caixa à direita */
  }

  @media (max-width: 768px) {
    justify-content: column;
    .button {
      display: none;
    }
    a {
      text-decoration: none;
    }
    .button-responsive {
      display: block;
      top: -98px;
      position: relative;
      width: 250px;
      min-height: 45px;
    }
    .content {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    .box {
      height: 668px;
      width: 280px;
      top: -196px;
    }
    .box img {
      position: absolute;
      right: 20%;
      left: 2%;
      height: 414px;
      width: 276px;
    }
    .informations {
      max-width: none;
      text-align: center;
      align-items: center;
      gap: 2rem;
      position: relative;
      justify-content: center;
      > div {
        padding: 1rem;
      }
    }

    h1 {
      font-size: 3.5rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      width: 290px;
    }
    p {
      font-size: 14px;
      line-height: 1.4;
    }
  }
`;
