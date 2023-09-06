import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ title, image }) => {
  return (
    <Link>
      <div
        className="cardContainer"
        style={{
          background: `linear-gradient(180deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0.5) 100%
), url("${image}")`,
          backgroundSize: "100% 100%",
        }}
      >
        <div>{title && <h2 className="cardTitle">{title}</h2>}</div>
      </div>
    </Link>
  );
};
