import styled from "styled-components";

export const Container = styled.div`
  background: grey;

  display: flex;

  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  display: flex;
  font-size: 1.7rem;
  height: 100px;
  font-weight: 600;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;

  font-weight: 600;
  .mobile-options {
    display: none;
  }
  .menu {
    display: none;
  }
  nav {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 2rem;
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
    color: #2d2e32;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.23s;
    font-weight: 600;
    &:hover {
      color: #e4b04c;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;

    height: 100px;
    nav h3 {
      padding-left: 4rem;
    }
    h3 {
      font-size: 25px;
    }
    nav {
      padding: 0;
    }
    nav ul {
      display: none;
    }
    .mobile-options {
      /* align-items: center; */
      background-color: #fff;
      display: flex;
      flex-direction: column;
      height: 37%;
      justify-content: center;
      left: 0;
      position: fixed;
      text-align: center;
      top: 0;
      transition: all 0.3s ease-in-out;
      width: 86%;
      z-index: 300;
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
        width: 60px;
        height: 60px;
        position: absolute;
        top: 20px;
        left: 400px;
      }
    }
    .mobile-options ul {
      display: flex;
      flex-direction: column;
      font-size: 30px;
      gap: 4rem;
      list-style: none;
    }
  }
`;
