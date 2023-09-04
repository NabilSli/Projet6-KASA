import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ title, link }) => {
  return (
    <Link className="cardCointainer">
      {title && <h2 className="cardTitle">{title}</h2>}
    </Link>
  );
};
