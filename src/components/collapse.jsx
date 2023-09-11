import { useState } from "react";

import arrowUp from "../assets/images/arrowUp.svg";
import arrowDown from "../assets/images/arrowDown.svg";

export default function Collapse({ collapseTitle, collapseTexte }) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="collapseComponentOpen">
      <button onClick={() => setIsOpen(false)}>
        {collapseTitle}
        <img alt="fleche de fermeture du menu" src={arrowUp}></img>
        <p className="collapseTexte">{collapseTexte}</p>
      </button>
    </div>
  ) : (
    <div className="collapseComponentClosed">
      <button onClick={() => setIsOpen(true)}>
        {collapseTitle}
        <img alt="fleche d'ouverture du menu" src={arrowDown}></img>
      </button>
    </div>
  );
}
