const Card = ({ data }) => {
  return (
    <div className="bg-white rounded shadow-md p-4">
      <div
        className="bg-cover h-40 bg-center rounded-t"
        style={{ backgroundImage: `url(${data.photo})` }}
      ></div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{data.city}</h3>
        <h4 className="text-gray-500 mb-2">{data.country}</h4>
        <p className="text-gray-700">{data.description}</p>
      </div>
    </div>
  );
};

export default Card;