import { useState } from "react";
import * as S from "./styles";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<number | null>(null);

  const handleModal = () => {
    setOpen(!open);
  };

  const handleLinkClick = (index: number) => {
    setActiveLink(index);
    handleModal();
  };

  return (
    <S.Container>
      <nav>
        <h3>
          <span> Aron</span>Nascimento
        </h3>
        <ul>
          <li>
            <a
              href="#home"
              className={activeLink === 0 ? "active" : ""}
              onClick={() => handleLinkClick(0)}
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeLink === 1 ? "active" : ""}
              onClick={() => handleLinkClick(1)}
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeLink === 2 ? "active" : ""}
              onClick={() => handleLinkClick(2)}
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeLink === 3 ? "active" : ""}
              onClick={() => handleLinkClick(3)}
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>

      <div className="menu" onClick={() => handleModal()}>
        <img src="/assets/menu.png" alt="" />
      </div>
      {open && (
        <>
          <div className="mobile-options">
            <ul>
              <li onClick={() => handleLinkClick(0)}>
                <a href="#home" className={activeLink === 0 ? "active" : ""}>
                  Início
                </a>
              </li>
              <li onClick={() => handleLinkClick(1)}>
                <a href="#about" className={activeLink === 1 ? "active" : ""}>
                  Sobre
                </a>
              </li>
              <li onClick={() => handleLinkClick(2)}>
                <a
                  href="#projects"
                  className={activeLink === 2 ? "active" : ""}
                >
                  Projetos
                </a>
              </li>
              <li onClick={() => handleLinkClick(3)}>
                <a href="#contact" className={activeLink === 3 ? "active" : ""}>
                  Contato
                </a>
              </li>
            </ul>
            {open && (
              <div onClick={() => handleModal()} className="backdrop"></div>
            )}
          </div>
        </>
      )}
    </S.Container>
  );
};
