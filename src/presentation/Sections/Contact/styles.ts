import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  font-size: 20px;
  height: 100vh;
  /* padding: 2rem 2rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  .content-contact {
    display: flex;
    flex-direction: column;
  }
  .content-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .content-title p {
    color: #e4b04c;
    align-items: center;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  .content__title h3 {
    font-size: 15px;
  }

  .content-icons {
    display: flex;
    align-items: center;
    justify-content: center;
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
  }
`;
