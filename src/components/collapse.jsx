import arrow from "../assets/images/arrow.svg";

export default function Collapse({
  collapseTitle,
  collapseTexte,
  isOpen,
  open,
  close,
}) {
  return (
    <div className="collapseComponent">
      <button onClick={isOpen ? close : open}>
        <section>
          <p>{collapseTitle}</p>
          <img alt="fleche de fermeture du menu" src={arrow}></img>
        </section>
        <p
          onClick={close}
          className={`text-container ${isOpen ? "open" : "closed"}`}
        >
          {collapseTexte}
        </p>
      </button>
    </div>
  );
}
