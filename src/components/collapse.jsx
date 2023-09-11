import { useState, useEffect } from "react";

import arrowUp from "../assets/images/arrowUp";
import arrowDown from "../assets/images/arrowDown";

export default function Collapse() {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="collapseComponentOpen">
      <button onClick={() => setIsOpen(false)}>
        Fiabilité
        <img alt="fleche de fermeture du menu" src={arrowUp}></img>
      </button>
      <p className="collapseTexte">lorem ipsum</p>
    </div>
  ) : (
    <div className="collapseComponentClosed">
      <button onClick={() => setIsOpen(true)}>
        Fiabilité
        <img alt="fleche d'ouverture du menu" src={arrowDown}></img>
      </button>
    </div>
  );
}
