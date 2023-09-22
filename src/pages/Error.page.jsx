import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="errorPageLayout">
      <h1 className="errorPageTitle">404</h1>
      <p className="errorPageTexte">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="errorPageLink" to={"/"}>
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
}

export default Error;
