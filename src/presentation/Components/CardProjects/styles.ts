import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;

  .content {
    display: flex;
  }
  .wrapper {
    display: flex;
  }
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 100;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0, 0, 0) 0px 4px 8px -4px;
  justify-content: center;
  align-items: center;
  width: auto;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: #e4b04c;
    cursor: pointer;
  }
  .preview {
    object-fit: cover;
    max-width: 100%;
    width: 400px;
    height: 200px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title-project {
    opacity: 0.5;
    background: #111111;
    width: 100%;
    height: auto;
    font-size: 15px;
    display: flex;
    justify-content: center;
    color: #fff;
  }

  @media (max-width: 768px) {
    max-width: 500px;
    width: auto;
    align-items: center;
  }
`;
type props = {
  image?: string;
};
export const Modal = styled.div`
  background-color: #fff;
  padding: 20px;
  z-index: 1000; /* Coloca o modal na frente do backdrop */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  position: fixed;
  left: 9%;
  top: 24%;
  display: flex;
  flex-direction: column;
  background-color: #111111;
  width: 80%;
  .description {
    overflow: auto;
    height: 150px;
  }
  .wrapper {
    gap: 1rem;
  }
  .header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    img {
      width: 30px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem;
    font-size: 24px;
    color: #e4b04c;
  }
  .wrapper-buttons {
    display: flex;
    gap: 2rem;
    padding-top: 1rem;
    align-items: center;
    justify-content: center;
    a {
      text-decoration: none;
    }

    .link {
      display: flex;
      background-color: #111111;
      align-items: center;
      justify-content: center;
      height: 20px;
      width: auto;
      padding: 1rem;
      font-size: 15px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      color: #fff;
    }
  }
  .text {
    overflow: auto;
    width: 100%;

    font-size: 20px;
    .techno {
      display: flex;
      width: 100%;
      align-items: center;
      color: #e4b04c;
    }
    .stacks {
      display: flex;
      flex-direction: column;
      .techs {
        display: flex;
        gap: 1rem;
      }
    }
  }
  @media (max-width: 768px) {
    min-height: 638px;
    min-height: 660px;
    max-width: 350px;
    width: 100%;
    left: 5%;
    top: 13%;
    border-radius: 12px;
    padding: 10px;
    align-items: center;
    z-index: 99999;
    justify-content: space-between;
    .wrapper-buttons .link {
      font-size: 12px;
    }
    .techs {
      display: flex;
    }
    .title {
    }
    .text .stacks .techs {
      gap: 0;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
    }
    .text {
      font-size: 15px;
      max-width: 300px;
    }

    .techno {
      justify-content: center;
    }
  }
`;

export const Video = styled.video<props>`
  height: 354px;
  width: 700px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-width: 350px;
  }
`;
