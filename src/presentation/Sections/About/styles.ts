import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  padding: 13rem 2rem;
  font-size: 20px;
  .wrapper {
    display: flex;
    justify-content: center;
    gap: 8rem;
    display: flex;
  }
  .content-about {
    line-height: 5px;
    li,
    p,
    a {
      color: #fff;
    }
    li {
      display: flex;
      gap: 1rem;
    }
    ul {
      padding: 0;
      display: flex;
      flex-direction: column;
    }
  }
  .informations-about {
    width: auto;
    max-width: 600px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: initial;
    padding: 6.7rem 2rem;
    .wrapper {
      gap: 0;
      flex-direction: column;
    }
    .informations-about {
      width: auto;
      max-width: 400px;

      align-items: center;
    }

    .content-about {
      width: auto;
      max-width: 400px;
    }
    h2 {
      text-align: center;
    }
    p {
      font-size: 15px;
    }
  }
`;
