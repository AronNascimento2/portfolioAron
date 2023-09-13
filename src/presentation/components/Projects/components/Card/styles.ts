import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  box-shadow: rgb(204, 204, 204) 0px 4px 8px -4px;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  background-color: #fff;
  border-radius: 18px;
  border: 1px solid lightgray;
  width: auto;
  .wrapper {
    display: flex;

    .text {
      padding: 1rem;
      width: 300px;
      .wrapper-buttons {
        background-color: #fff;
        display: flex;
        gap: 1rem;
        width: 300px;

        .tech {
          width: 400px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 1.3rem;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          color: #000;
          &:hover {
            cursor: pointer;
          }
        }
      }
      p {
        display: flex;
        justify-content: center;
        font-size: 15px;
      }
    }
  }
  @media (max-width: 768px) {
    width: auto;
    max-width: 400px;
    align-items: center;
    .wrapper {
      flex-direction: column;
      .text {
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 300px;
          font-size: 15px;
        }
      }
    }
  }

  .texts {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    font-size: 20px;
  }
  .wrapper-buttons {
    background-color: #fff;

    display: flex;
    gap: 1rem;
    a {
      color: black;
      text-decoration: none;
    }
    .link {
      width: 200px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      margin: 1rem;
      font-weight: 600;
      font-size: 14px;
      border: 1px solid black;
      &:hover {
        cursor: pointer;
      }
    }
  }
  @media (max-width: 768px) {
    .wrapper-buttons {
      background-color: #fff;

      display: flex;
      gap: 1rem;
      a {
        color: black;
        text-decoration: none;
      }
      .link {
        width: 150px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        font-weight: 600;
        font-size: 10px;
        border: 1px solid black;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
type props = {
  image?: string;
};

export const Video = styled.video<props>`
  height: 354px;
  width: 700px;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 177px;
    width: 350px;
  }
`;
