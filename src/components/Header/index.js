import * as S from "./styles";
import { useState } from "react";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState("disabled");

  const toggleState = () => {
    if (toggleMenu === "disabled") {
      setToggleMenu("active");
    } else {
      setToggleMenu("disabled");
    }
  };

  return (
    <S.Header id="header" className="fixed">
      <S.Nav id="nav" className={toggleMenu}>
        <S.BtnMobile
          onClick={() => toggleState()}
          aria-label="Abrir Menu"
          id="btn-mobile"
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded="false"
        >
          <S.Hamburger id="hamburger"></S.Hamburger>
        </S.BtnMobile>
        <S.MenuUl id="menu" role="menu">
          <li>
            <S.MenuA
              href="#"
              onClick={() => setToggleMenu("disabled")}
              className="fixed"
            >
              Opt1
            </S.MenuA>
          </li>
          <li>
            <S.MenuA
              href="#galery"
              onClick={() => setToggleMenu("disabled")}
              className="fixed"
            >
              Opt2
            </S.MenuA>
          </li>
        </S.MenuUl>
      </S.Nav>
    </S.Header>

  );
}

export default Header;