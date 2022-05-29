import React, { useState } from "react";

import { Nav, Logo, Hamburger, Menu, MenuLink, LogoN } from "./Header.styles";

import logo from "../../images/yelao.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo href="/">
        <LogoN src={logo} />
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="#acerca" className="primero">
          Acerca de
        </MenuLink>
        <hr class="menu" />

        <MenuLink href="#lotes" className="segundo">
          Lotes
        </MenuLink>
        <hr class="menu" />
        <MenuLink href="#contacto" className="tercero">
          Contáctanos
        </MenuLink>
        <hr class="menu" />
      </Menu>
    </Nav>
  );
};

export default Header;
