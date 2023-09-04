import React from "react";

import "../../scss/components/_titleCard.scss";

// TODO: add image file and src
export default function TitleCard(imgSrc, ImgAlt, title) {
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
