import React from "react";

import logoHeader from "../assets/logoHeader.svg"
import logoFooter from "../assets/logoFooter.svg"

function Layout({ children }) {
    return (
    <div>
        <header>
            <img alt="logo de Kasa" src={logoHeader} className="logoHeader"></img>
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>A Propos</li>
                </ul>
            </nav>
        </header>
            
        {children}
            
        <footer>
            <img alt="logo de Kasa" src={logoFooter} className="logoFooter"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
        </div>
    )
}

export default Layout