import { useState } from "react";
import * as S from "./styles";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };
  return (
    <S.Container>
      <nav>
        <h3>
          <span> Aron</span>desenvolvedor
        </h3>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="menu" onClick={() => handleModal()}>
        <img src="/assets/menu.png" alt="" />
      </div>
      {open && (
        <div className="mobile-options">
          <ul>
            <li onClick={() => handleModal()}>
              <a href="#home">Home</a>
            </li>
            <li onClick={() => handleModal()}>
              <a href="#about">About</a>
            </li>
            <li onClick={() => handleModal()}>
              <a href="#projects">Projects</a>
            </li>
            <li onClick={() => handleModal()}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </S.Container>
  );
};
