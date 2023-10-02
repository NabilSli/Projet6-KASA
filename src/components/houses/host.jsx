const DisplayHost = ({ name, portait }) => {
  return (
    <div className="hostContent">
      <p className="hostName">{name}</p>
      <img className="hostPicture" alt={name} src={portait}></img>
    </div>
  );
};

export default DisplayHost;
