const DisplayHost = ({ name, portait }) => {
  return (
    <div>
      <p>{name}</p>
      <img alt={name} src={portait}></img>
    </div>
  );
};

export default DisplayHost;
