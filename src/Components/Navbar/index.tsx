import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import { Lang } from "../Lang";

import { Nav, NavLink, NavMenu, MobileIcon, NavItem, NavLogo } from "./styles";

export function Navbar() {
  const { t } = useTranslation();
  const [click, setClick] = useState(false);
  const drawerRef = useRef(null);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <Nav>
      <NavLogo ref={drawerRef} onClick={closeMobileMenu}>
        <h1>LF</h1>
      </NavLogo>
      <MobileIcon onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      <NavMenu click={click}>
        <NavItem>
          <NavLink href="/#Home" onClick={closeMobileMenu}>
            {t("translation.navbar.home")}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/#About" onClick={closeMobileMenu}>
            {t("translation.navbar.about")}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/#Work" onClick={closeMobileMenu}>
            {t("translation.navbar.work")}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/#Contact" onClick={closeMobileMenu}>
            {t("translation.navbar.contact")}
          </NavLink>
        </NavItem>
        <NavItem>
          <Lang />
        </NavItem>
      </NavMenu>
    </Nav>
  );
}
