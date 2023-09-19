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
        <section>
          <p>{collapseTitle}</p>
          <img alt="fleche de fermeture du menu" src={arrowDown}></img>
        </section>
        <p className="openCollapseTexte">{collapseTexte}</p>
      </button>
    </div>
  ) : (
    <div className="collapseComponentClosed">
      <button onClick={open}>
        <p>{collapseTitle}</p>
        <img alt="fleche d'ouverture du menu" src={arrowUp}></img>
      </button>
    </div>
  );
}
