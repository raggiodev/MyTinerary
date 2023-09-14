import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaMoneyBillWave } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import Activities from "./Activities";

const Itinerary = ({ data }) => {
  if (!data) {
    return <div className="text-center text-8xl mt-8">LOADING...</div>;
  }

  const [expanded, setExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(data.likes);
  const [showActivities, setShowActivities] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prevLikes) => (isLiked ? prevLikes - 1 : prevLikes + 1));
  };

  const likeIcon = isLiked ? <FaHeart /> : <FaRegHeart />;

  const renderDollarIcons = () => {
    const dollarIcons = [];
    for (let i = 0; i < data.price; i++) {
      dollarIcons.push(
        <FaMoneyBillWave key={i} className="w-4 h-4 inline-block" />
      );
    }
    return dollarIcons;
  };

  return (
    <div className="border rounded-md overflow-hidden text-center">
      <h1 className="text-2xl font-bold p-2">{data.title}</h1>
      <div
        style={{ backgroundImage: `url(${data.photo})` }}
        className="h-80 bg-cover bg-center relative"
      >
        <div className="absolute top-2 right-2">
          <div
            className={`${isLiked ? "text-red-500" : ""}
              cursor-pointer bg-gray-200 rounded-full p-2`}
            onClick={toggleLike}
          >
            {likeIcon} {likes}
          </div>
        </div>
      </div>
      <h2 className="text-xl font-semibold p-2">{data.name}</h2>
      <div className="p-2 flex flex-wrap justify-center">
        {data.hashtags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 rounded-full px-2 py-1 text-sm m-1"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="p-2 flex items-center justify-center">
        <img
          src={data.authorPhoto}
          alt={data.authorPhoto}
          className="w-12 h-12 rounded-full mr-2"
        />
        <h3 className="mt-1">{data.author}</h3>
      </div>
      <div className="p-2 flex items-center justify-center">
        <h5 className="ml-4">
          <span className="font-semibold">Price:</span> {renderDollarIcons()}
        </h5>
        <h5 className="ml-4">
          <span className="font-semibold">Duration:</span> {data.duration} min
        </h5>
      </div>
      <div
        onClick={() => setShowActivities(!showActivities)}
        className="cursor-pointer p-2 text-blue-500 hover:underline"
      >
        View More{" "}
        <BsChevronDown
          size="1rem"
          className={`${
            showActivities ? "transform rotate-180" : ""
          } transition-transform duration-500 ease-in-out`}
        />
      </div>
      {showActivities && (
        <div className={expanded ? "expanded" : "collapsed expanded"}>
          <Activities itineraryId={data._id} />
        </div>
      )}
    </div>
  );
};

export default Itinerary;