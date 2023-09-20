import styled from "styled-components";

export const Container = styled.div`
  background-color: #111111;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  display: flex;
  font-size: 1.7rem;
  font-weight: 600;
  top: 0;
  width: 100%;
  z-index: 200;
  position: fixed;

  font-weight: 600;
  .mobile-options {
    display: none;
  }
  .menu {
    display: none;
  }
  nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 2rem;
    background-color: #111111;
  }
  nav h3 {
    padding-left: 2rem;
  }
  h3 span {
    color: #e4b04c;
  }
  nav ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    padding-right: 2rem;
  }
  a {
    color: #fff;

    font-weight: 600;
    text-decoration: none;
    transition: all 0.23s;
    font-weight: 600;
    &:hover {
      color: #e4b04c;
    }
  }
  a.active {
    color: #e4b04c;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    height: 100px;
    .backdrop {
      height: 100vh;
      width: 100%;
      position: absolute;
      background-color: black;
      opacity: 0.6;
      top: 100%;
    }
    nav h3 {
      padding-left: 4rem;
    }
    h3 {
      font-size: 20px;
    }
    nav {
      padding: 0;
    }
    nav ul {
      padding: 0;
      display: none;
    }
    .mobile-options {
      /* align-items: center; */
      background-color: #111111;
      display: flex;
      flex-direction: column;
      height: 40%;
      justify-content: center;
      left: 0;
      position: fixed;
      text-align: center;
      top: 98px;
      transition: all 0.3s ease-in-out;
      width: 100%;
      z-index: 9999;

      .close-button {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        span {
          font-size: 30px;
          padding-right: 3rem;
        }
      }
    }
    .menu {
      cursor: pointer;
      display: block;
      img {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 30px;
        left: 350px;
      }
    }
    .mobile-options ul {
      display: flex;
      flex-direction: column;
      font-size: 20px;
      gap: 3rem;
      list-style: none;
      padding: 0;
    }
  }
`;
