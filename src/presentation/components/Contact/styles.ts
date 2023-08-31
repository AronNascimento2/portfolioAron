import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  margin: 0 auto;
  max-width: 107rem;
  padding: 11rem 0;

  .content-contact {
    display: flex;
    flex-direction: column;
  }
  .content-title p {
    color: #147efb;

    font-weight: 700;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  .content__title h3 {
    color: #2d2e32;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 3rem;
  }
  .content-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 6rem;
  }

  .content__icon-box {
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    height: 80px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon-img {
    height: 4rem;
    width: 4.2rem;
  }
  .content__icon-box {
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 768px) {
    .content-contact {
      align-items: center;
    }
    .content__title {
      display: flex;
      justify-content: center;
    }
    .content-title {
      padding: 1rem;
    }
    h3 {
      font-size: 15px;
    }
    .content-icons {
      padding: 1rem;
    }
    .content__icon-box {
      height: 50px;
      width: 50px;
    }
    .icon-img {
      height: 3rem;
      width: 3rem;
    }
  }
`;
