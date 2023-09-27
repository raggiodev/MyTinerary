import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {createItinerariesByCity} from "../redux/actions/itineraryActions";

const CityItineraries = () => {
  const { cityId } = useParams();
  const dispatch = useDispatch();
  const itineraries = useSelector((state) => state.itineraries.itineraries);

  useEffect(() => {
    dispatch(createItinerariesByCity(cityId));
  }, [cityId, dispatch]);

  return (
    <div>
      <h2>Itineraries for the City</h2>
      {itineraries.length === 0 ? (
        <p>No itineraries available for this city.</p>
      ) : (
        <ul>
          {itineraries.map((itinerary) => (
            <li key={itinerary._id}>
              <div>
                <img src={itinerary.image} alt={itinerary.title} />
                <h3>{itinerary.title}</h3>
                <p>Price: {itinerary.price}</p>
                <p>Duration: {itinerary.duration} hours</p>
                <p>Likes: {itinerary.likes}</p>
                <p>Hashtags: {itinerary.hashtags.join(", ")}</p>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CityItineraries;