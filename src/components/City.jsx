import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchItinerariesByCity, createItinerary} from "../redux/city/cityActions";

const City = () => {
  const { cityId } = useParams();
  const dispatch = useDispatch();
  const itineraries = useSelector((state) => state.city.itineraries);

  useEffect(() => {
    dispatch(fetchItinerariesByCity(cityId));
  }, [dispatch, cityId]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newItinerary, setNewItinerary] = useState({
    title: "",
    description: "",
    // Añadir más campos del itinerario
  });

  const handleCreateFormToggle = () => {
    setShowCreateForm(!showCreateForm);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItinerary({ ...newItinerary, [name]: value });
  };

  const handleCreateItinerary = () => {
    dispatch(createItinerary(cityId, newItinerary));
    setNewItinerary({
      title: "",
      description: "",
      // Añadir más campos del itinerario
    });
  };

  return (
    <div>
      <h2>City Details</h2>
      {/* Detalles de cada ciudad */}
      <h3>Itineraries</h3>
      <ul>
        {itineraries.map((itinerary) => (
          <li key={itinerary._id}>
            <h4>{itinerary.title}</h4>
            <p>Price: {itinerary.price}</p>
            <p>Duration: {itinerary.duration} hours</p>
            <p>Likes: {itinerary.likes}</p>
            <ul>
              {itinerary.hashtags.map((tag, index) => (
                <li key={index}>#{tag}</li>
              ))}
            </ul>
            {/* Actividades */}
            <h5>Activities</h5>
            <ul>
              {itinerary.activities.map((activity) => (
                <li key={activity._id}>
                  <p>Name: {activity.name}</p>
                </li>
              ))}
            </ul>
            {/* Comentarios */}
            <h5>Comments</h5>
            {itinerary.comments.length === 0 ? (
              <p>No comments yet for this itinerary.</p>
            ) : (
              <ul>
                {itinerary.comments.map((comment) => (
                  <li key={comment._id}>
                    <p>Author: {comment.author}</p>
                    <p>Comment: {comment.text}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Creación de nuevo itinerario */}
      {showCreateForm ? (
        <div>
          <h3>Create New MyTinerary</h3>
          <input
            type="text"
            name="title"
            value={newItinerary.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
          <textarea
            name="description"
            value={newItinerary.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
          <button onClick={handleCreateItinerary}>Create</button>
          <button onClick={handleCreateFormToggle}>Cancel</button>
        </div>
      ) : (
        <button onClick={handleCreateFormToggle}>Create New Itinerary</button>
      )}
    </div>
  );
};

export default City;