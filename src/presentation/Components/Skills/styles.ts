import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  .sub-title {
    display: flex;
    padding-bottom: 4rem;
    color: #e4b04c;
  }
  div {
    width: 350px;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    position: relative;
    right: 15px;
  }
  i {
    margin-left: 1.1rem;
    font-size: 50px; /* Defina o tamanho desejado aqui */
  }
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding-top: 3rem;
    .sub-title {
      justify-content: center;
    }
    div {
      justify-content: center;
      right: 12px;
      gap: 1rem;
      right: 0;
    }
    img {
      width: 65px;
    }
  }
`;
