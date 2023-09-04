import React, {useState} from "react";
import {FaHeart, FaRegHeart, FaMoneyBillWave} from "react-icons/fa";
import {BsChevronDown} from "react-icons/bs";
import underConstruction from "../assets/underConstruction.jpg";

const Itinerary = ({ data }) => {
  if (!data) {
    return <h1>Loading...</h1>
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

  const renderDollarIcon = () => {
    const dollarIcon = [];
    for (let i = 0; i < data.price; i++) {
      dollarIcon.push(<FaMoneyBillWave key={i} className="w-4 h-4 inline-block" />);
    }
    return dollarIcon;
  };

  return (
    <div className="border rounded-md overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data.photo})` }}
        className="h-40 bg-cover bg-center relative"
      >
        <div className="absolute top-2 right-2">
          <div
            className={`${
              isLiked ? "" : ""
            }`}
            onClick={toggleLike}
          >
            {likeIcon}
            {likes}
          </div>
        </div>
      </div>
      <h1 className="text-xl font-semibold p-2">{data.name}</h1>
      <div className="p-2">
        {data.hashtags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
      <div className="p-2">
        <div>
          <img src={data.authorPhoto} alt={data.authorName} />
          <h3>{data.authorName}</h3>
        </div>
        <h5>
          <span>Price: </span>
          {renderDollarIcon()}
        </h5>
        <h5>
          <span>Duration: </span>
          {data.duration} min
        </h5>
      </div>
      <div className={expanded ? "expanded" : "collapsed expanded"}>
        <div>
          <h2>
            Section <span>Under </span>Construction
          </h2>
          <h5>Content will be available soon</h5>
        </div>
        <img
          style={{ maxWidth: "90%", maxHeight: "10rem" }}
          src={underConstruction}
          alt="workers construction house"
        />
      </div>
      <div
        onClick={() => setExpanded(!expanded)}
        className="cursor-pointer p-2 text-blue-500 hover:underline"
      >
        View More <BsChevronDown size="1rem" style={{ transition: "1s ease", transform: expanded ? 'rotate(-180deg)' : '' }} />
      </div>
    </div>
  );
};

export default Itinerary;