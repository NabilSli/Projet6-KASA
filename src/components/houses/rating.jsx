import starActive from "../../assets/images/starActive.svg";
import starInactive from "../../assets/images/starInactive.svg";

const DisplayActiveStar = () => {
  return <img alt="active star" src={starActive}></img>;
};

const DisplayInactiveStar = () => {
  return <img alt="inactive star" src={starInactive}></img>;
};

export { DisplayActiveStar, DisplayInactiveStar };
