import React from "react";
import { NavLink } from "react-router-dom";
import { home, aboutUs } from "../routes";

import logoHeader from "../assets/images/logoHeader.svg";

function Header() {
  return (
    <header className="header">
      <img alt="logo de Kasa" src={logoHeader} className="logoHeader"></img>
      <nav>
        <ul className="navLinks">
          <li>
            <NavLink to={home.path} activeclassname="activeLink">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to={aboutUs.path} activeclassname={"activeLink"}>
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
