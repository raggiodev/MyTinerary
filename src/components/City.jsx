import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItinerariesByCity } from "../redux/city/cityActions";

const City = () => {
  const { cityId } = useParams();
  const dispatch = useDispatch();
  const itineraries = useSelector((state) => state.city.itineraries);

  useEffect(() => {
    dispatch(fetchItinerariesByCity(cityId));
  }, [dispatch, cityId]);

  return (
    <div>
      <h2>City Details</h2>
      {/*City details*/}
      <h3>Itineraries</h3>
      <ul>
        {itineraries.map((itinerary) => (
          <li key={itinerary._id}>{/*Itinerary details*/}</li>
        ))}
      </ul>
    </div>
  );
};

export default City;