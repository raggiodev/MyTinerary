import React, {useState} from "react";
import {FaHeart, FaRegHeart, FaMoneyBillWave} from "react-icons/fa";
import {BsChevronDown} from "react-icons/bs";
import underConstruction from "../assets/underConstruction.jpg";

const Itinerary = ({ data }) => {
  if (!data) {
    return <h1>Loading...</h1>;
  }

  const [expanded, setExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(data.likes);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
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
      <div
        style={{ backgroundImage: `url(${data.photo})` }}
        className="h-40 bg-cover bg-center relative"
      >
        <div className="absolute top-2 right-2">
          <div
            className={`${
              isLiked ? "text-red-500" : ""
            } cursor-pointer bg-gray-200 rounded-full p-2`}
            onClick={toggleLike}
          >
            {likeIcon} {likes}
          </div>
        </div>
      </div>
      <h1 className="text-xl font-semibold p-2">{data.name}</h1>
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
      <div className="p-2">
        <div
          className={`${
            expanded ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
          } transition-all duration-500 ease-in-out overflow-hidden`}
        >
          <h2 className="mb-2">
            Section <span>Under</span> Construction
          </h2>
          <h5 className="mb-2">Content will be available soon</h5>
          <div className="flex items-center justify-center">
            <img
              style={{ maxWidth: "90%", maxHeight: "10rem" }}
              src={underConstruction}
              alt="workers construction house"
            />
          </div>
        </div>
      </div>
      <div
        onClick={() => setExpanded(!expanded)}
        className="cursor-pointer p-2 text-blue-500 hover:underline"
      >
        View More{" "}
        <BsChevronDown
          size="1rem"
          className={`${
            expanded ? "transform rotate-180" : ""
          } transition-transform duration-500 ease-in-out`}
        />
      </div>
    </div>
  );
};

export default Itinerary;