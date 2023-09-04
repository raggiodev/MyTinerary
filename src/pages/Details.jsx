import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {createCity, createItinerariesByCity} from "../redux/city/cityActions";
import Itinerary from "../components/Itinerary";
import NoItinerariesFound from "../components/NoItinerariesFound";

const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const city = useSelector((store) => store.createCityReducer.city);
  const itineraries = useSelector((store) => store.createItinerariesByCityReducer.itineraries);

  useEffect(() => {
    dispatch(createCity(params.id));
    dispatch(createItinerariesByCity(params.id));
  }, [params.id, dispatch]);

  useEffect(() => {
    document.title = params.id + " - MyTinerary";
  }, [params.id]);

  if (!city || !city.city || !itineraries) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div style={{ backgroundImage: `url(${city.photo})` }}>
        <h1>{city.city}</h1>
        <h2>{city.country}</h2>
      </div>
      <span>
        <p>Population: <span>{city.population}</span></p>
        <p>Fundation: <span>{city.fundation}</span></p>
        <p>Featured Locations: <span>{city.featuredLocation}</span></p>
      </span>
      <p>{city.description}</p>
      <div style={{ backgroundImage: `url(${city.photo})` }}>
        <button onClick={() => navigate(-1)}>
          Go Back to Cities
        </button>
      </div>
      <div>
        {itineraries.length === 0 ? (
          <NoItinerariesFound />
        ) : (
          itineraries.map((itinerary, index) => (
            <Itinerary data={itinerary} key={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default Details;