import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";

import logoHeader from "../assets/logoHeader.svg"
import logoFooter from "../assets/logoFooter.svg"

function Layout({ children }) {
    return (
    <div>
        <header className="header">
            <img alt="logo de Kasa" src={logoHeader} className="logoHeader"></img>
            <nav>
                <ul className="navLinks">
                    <li><NavLink to={routes.Home.path}>Accueil</NavLink></li>
                    <li><NavLink to={routes.Aboutus.path}>A Propos</NavLink></li>
                </ul>
            </nav>
        </header>
            
        {children}
            
        <footer className="footer">
            <img alt="logo de Kasa" src={logoFooter} className="logoFooter"></img>
            <p>© 2020 Kasa. All<br/> rights reserved</p>
        </footer>
        </div>
    )
}

export default Layout