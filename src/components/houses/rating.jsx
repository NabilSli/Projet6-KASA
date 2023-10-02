import starActive from "../../assets/images/starActive.svg";
import starInactive from "../../assets/images/starInactive.svg";

const StarRating = ({ rating }) => {
  const maxRating = 5;
  const activeStar = Math.round(rating);
  const inactiveStar = maxRating - activeStar;

  const stars = [];

  for (let i = 0; i < activeStar; i++) {
    stars.push(
      <img
        key={i}
        className="starActive"
        alt="une etoile"
        src={starActive}
      ></img>
    );
  }

  for (let i = 0; i < inactiveStar; i++) {
    stars.push(
      <img
        key={`empty-${i}`}
        className="starInactive"
        alt=""
        src={starInactive}
      ></img>
    );
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
