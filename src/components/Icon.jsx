const Icon = ({ icon, fn }) => {
  return <img className="icon" onClick={() => fn()} src={icon} />;
};

export default Icon;