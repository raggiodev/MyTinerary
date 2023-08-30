import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchItinerariesByCity} from "../redux/city/cityActions";

const City = () => {
  const { cityId } = useParams();
  const dispatch = useDispatch();
  const itineraries = useSelector((state) => state.city.itineraries);

  useEffect(() => {
    dispatch(fetchItinerariesByCity(cityId));
  },
  [dispatch, cityId]);

  return (
    <div>
      <h3>Itineraries</h3>
      <ul>
        {itineraries.length === 0 ? (
          <p>No itineraries yet for this city.</p>
        ) : (
          itineraries.map((itinerary) => (
            <li key={itinerary._id}>
              {/* Detalles del itinerario */}
              <h4>{itinerary.name}</h4>
              <p>Price: {itinerary.price}</p>
              <p>Duration: {itinerary.duration} hours</p>
              <p>Likes: {itinerary.likes}</p>
              <ul>
                {itinerary.hashtags.map((tag, index) => (
                  <li key={index}>#{tag}</li>
                ))}
              </ul>
              {/* Visualización de actividades */}
              <h5>Activities</h5>
              <ul>
                {itinerary.activities.map((activity) => (
                  <li key={activity._id}>
                    {/* Detalles de la actividad */}
                    <p>Name: {activity.name}</p>
                  </li>
                ))}
              </ul>
              {/* Visualización de comentarios */}
              <h5>Comments</h5>
              {itinerary.comments.length === 0 ? (
                <p>No comments yet for this itinerary.</p>
              ) : (
                <ul>
                  {itinerary.comments.map((comment) => (
                    <li key={comment._id}>
                      {/* Detalles del comentario */}
                      <p>Author: {comment.author}</p>
                      <p>Comment: {comment.text}</p>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default City;