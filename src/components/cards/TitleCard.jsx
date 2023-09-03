import React from "react";
// TODO: add image file and src
export default function TitleCard() {
  return (
    <article className="titleCardContainer">
      <img
        src={null}
        alt="Title background"
        className="titleCardBackground"
      ></img>
      <h1 className="pageTitle">
        Chez vous,
        <br />
        partout et ailleurs
      </h1>
    </article>
  );
}
