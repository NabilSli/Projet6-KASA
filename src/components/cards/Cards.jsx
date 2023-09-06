import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ title }) => {
  return (
    <Link className="cardContainer">
      {title && <h2 className="cardTitle">{title}</h2>}
    </Link>
  );
};
