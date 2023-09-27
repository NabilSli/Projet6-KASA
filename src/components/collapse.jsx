import arrow from "../assets/images/arrow.svg";

export default function Collapse({
  collapseTitle,
  collapseTexte,
  collapseList,
  isOpen,
  open,
  close,
}) {
  return (
    <div className={`collapseComponent ${isOpen ? "open" : ""}`}>
      <button onClick={isOpen ? close : open}>
        <section className="collapseTitle">
          <p>{collapseTitle}</p>
          <img
            className="arrow"
            alt="fleche de fermeture du menu"
            src={arrow}
          ></img>
        </section>
        <section className={`collapseTexte ${isOpen ? "open" : "closed"}`}>
          <p className="textContainer">{collapseTexte}</p>
          {collapseList}
        </section>
      </button>
    </div>
  );
}
