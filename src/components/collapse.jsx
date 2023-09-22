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
        <section className="collapseTitle">
          <p>{collapseTitle}</p>
          <img
            className="arrow"
            alt="fleche de fermeture du menu"
            src={arrow}
          ></img>
        </section>
        <section className="collapseTexte">
          <p className={`text-container ${isOpen ? "open" : "closed"}`}>
            {collapseTexte}
          </p>
        </section>
      </button>
    </div>
  );
}
