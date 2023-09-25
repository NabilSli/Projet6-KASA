import React from "react";
import { Link } from "react-router-dom";

import fallbackImage from "../../assets/images/titleBackground.svg";

export const Card = ({ title, image, id }) => {
  const backgroundImage =
    typeof image == "string" && image.length > 0 ? image : fallbackImage;

  return (
    <Link to={`/housing/${id}`}>
      <div
        className="cardContainer"
        style={{
          background: `linear-gradient(180deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0.5) 100%
), url("${backgroundImage}")`,
          backgroundSize: "100% 100%",
        }}
      >
        <div>{title && <h2 className="cardTitle">{title}</h2>}</div>
      </div>
    </Link>
  );
};
