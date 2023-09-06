import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ title, image }) => {
  return (
    <Link className="cardContainer">
      {image && <img alt={title} src={image}></img>}
      <div>{title && <h2 className="cardTitle">{title}</h2>}</div>
    </Link>
  );
};
