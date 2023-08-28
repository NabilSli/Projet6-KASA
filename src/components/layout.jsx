import React from "react";

function Layout({ children }) {
    return (
    <div>
        <header>
            <img alt="logo de Kasa" src="*" className="logoHeader"></img>
            <nav>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </header>
        <footer>
            <img alt="logo de Kasa" src="*" className="logoFooter"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
        </div>
    )
}

export default Layout