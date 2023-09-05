import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";

import logoHeader from "../assets/logoHeader.svg";

function Header() {
  return (
    <header className="header">
      <img alt="logo de Kasa" src={logoHeader} className="logoHeader"></img>
      <nav>
        <ul className="navLinks">
          <li>
            <NavLink to={routes.Home.path}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to={routes.Aboutus.path}>A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
