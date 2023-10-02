const TitleAndLocation = ({ title, location }) => {
  return (
    <div>
      <h2 className="housingTitle">{title}</h2>
      <p className="housingDescription">{location}</p>
    </div>
  );
};

export default TitleAndLocation;
