import React from "react";

import logoHeader from "../assets/logoHeader.svg"
import logoFooter from "../assets/logoFooter.svg"
import { NavLink } from "react-router-dom";

function Layout({ children }) {
    return (
    <div>
        <header className="header">
            <img alt="logo de Kasa" src={logoHeader} className="logoHeader"></img>
            <nav>
                <ul className="navLinks">
                    <li><NavLink to={"/"}>Accueil</NavLink></li>
                    <li><NavLink to={"aboutus"}>A Propos</NavLink></li>
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