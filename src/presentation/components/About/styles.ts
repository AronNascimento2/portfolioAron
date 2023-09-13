import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  h4 {
    color: #2d2e32;
    font-family: Poppins, sans-serif;
    font-size: 2rem;
    line-height: 1.4;
    margin-bottom: 2rem;
  }
  p {
    color: #767676;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.5;
  }
  .content-about {
    align-items: center;
    display: flex;
    gap: 3rem;
    justify-content: center;
    position: relative;
  }
  .informations-about {
    display: flex;
    flex-direction: column;
    width: 52rem;
    position: relative;
    height: 100%;
    top: -14px;
  }

  .box-about {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 436px;
    height: 250px;
    background: #e4b04c;
    transition: transform 0.3s ease;
  }
  .img-about {
    width: 430px;
    height: 258px;
    position: relative;
    right: 5%;
    top: -32px;
  }

  .box-about:hover {
    transform: scale(
      1.1
    ); /* Aplique um zoom de 110% quando o mouse estiver sobre a imagem */
  }
  @media (max-width: 768px) {
    .informations-about {
      width: auto;
      max-width: 400px;
    }
    .img-about {
      width: auto;
      max-width: 400px;
    }
    .content-about {
      width: auto;
      max-width: 400px;
      display: flex;
      flex-direction: column;
    }
    h4 {
      text-align: center;
      padding: 1rem;
      font-size: 15px;
    }
    p {
      padding: 1rem;
      font-size: 15px;
    }
    .box-about {
      width: auto;
      margin: 1rem;
      max-width: 500px;
    }
  }
`;
