import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Nav, NavLink,NavMenu, MobileIcon, NavItem, NavLogo } from "./styles";


export function Navbar() {
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
      <NavLogo ref={drawerRef} onClick={closeMobileMenu} >
        <h1>LF</h1>
      </NavLogo>
      <MobileIcon onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      <NavMenu click={click} onClick={handleClick} >
        <NavItem>
          <NavLink href="#Home" onClick={closeMobileMenu}>
            01.Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#About" onClick={closeMobileMenu}>
            02.About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#Work" onClick={closeMobileMenu}>
            03.Work
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#Contact" onClick={closeMobileMenu}>
            04.Contact
          </NavLink>
        </NavItem>
      </NavMenu>
    </Nav>
  );
}
