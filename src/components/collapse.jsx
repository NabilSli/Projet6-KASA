import { useState } from "react";

import arrowUp from "../assets/images/arrowUp.svg";
import arrowDown from "../assets/images/arrowDown.svg";

export default function Collapse({
  collapseTitle,
  collapseTexte,
  isOpen,
  open,
  close,
}) {
  return isOpen ? (
    <div className="collapseComponentOpen">
      <button onClick={close}>
        {collapseTitle}
        <img alt="fleche de fermeture du menu" src={arrowUp}></img>
        <p className="collapseTexte">{collapseTexte}</p>
      </button>
    </div>
  ) : (
    <div className="collapseComponentClosed">
      <button onClick={open}>
        {collapseTitle}
        <img alt="fleche d'ouverture du menu" src={arrowDown}></img>
      </button>
    </div>
  );
}
