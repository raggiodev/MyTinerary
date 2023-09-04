import React, {useState} from "react";
import underconstruction from "../assets/underConstruction.jpg";
import unLikeImage from "../assets/unLike.jpg";
import likeImage from "../assets/like.jpg";
import dollar from "../assets/dollar.jpg";

const Itinerary = ({ data }) => {
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

  const likeImageSrc = isLiked ? likeImage : unLikeImage;

  const renderDollarIcons = () => {
    const dollarIcons = [];
    for (let i = 0; i < data.price; i++) {
      dollarIcons.push(<img key={i} src="../assets/dollar.jpg" alt="Dollar" />);
    }
    return dollarIcons;
  };

  return (
    <div className="itinerary">
      <div style={{ backgroundImage: `url(${data.photo})` }}>
        <div className="like">
          <div className="heart" onClick={toggleLike}>
            {likes}
            <img src={likeImageSrc} alt="Like" />
          </div>
        </div>
      </div>
      <h1>{data.name}</h1>
      <div className="tags">
        {data.tematicHashtags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
      <div className="collapse">
        <div className="author">
          <img src={data.authorPhoto} alt={data.authorName} />
          <h3>{data.authorName}</h3>
        </div>
        <h5>
          <span>Price: </span>
          {renderDollarIcons()}
        </h5>
        <h5>
          <span>Duration: </span>
          {data.duration} min
        </h5>
      </div>
      <div className={expanded ? "expanded" : "collapsed expanded"}>
        <div>
          <h2>
            Section <span className="acent">Under </span>Construction
          </h2>
          <h5>Content will be available soon</h5>
        </div>
        <img
          style={{ maxWidth: "90%", maxHeight: "10rem" }}
          src={underconstruction}
          alt="workers construction house"
        />
      </div>
      <div onClick={() => setExpanded(!expanded)}>
        View More{" "}
        <img
          src="../assets/dollar.jpg"
          alt="Chevron Down"
          style={{
            transition: "1s ease",
            transform: expanded ? "rotate(-180deg)" : "",
          }}
        />
      </div>
    </div>
  );
};

export default Itinerary;