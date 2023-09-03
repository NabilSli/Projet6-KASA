import React from "react";

import "../../scss/components/titleCard.scss";
import titleBackground from "../../assets/titleBackground.svg";

// TODO: add image file and src
export default function TitleCard() {
  return (
    <article className="titleCardContainer">
      <h1 className="pageTitle">
        Chez vous,
        <br />
        partout et ailleurs
      </h1>
    </article>
  );
}
