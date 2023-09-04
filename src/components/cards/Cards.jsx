import React from "react";

import "../../scss/components/_cards.scss";

export const Card = ({ title, link }) => {
  return (
    <article className="cardCointainer">
      {title && <h2 className="cardTitle">{title}</h2>}
      {link && <a href={link} className="cardLink"></a>}
    </article>
  );
};
