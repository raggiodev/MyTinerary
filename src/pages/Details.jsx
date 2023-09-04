import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createCity, createItinerariesByCity } from "../redux/actions/cityActions";
import Itinerary from "../components/Itinerary";
import NoItinerariesFound from "../components/NoItinerariesFound";

const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const city = useSelector((store) => store.createCityReducer.city);
  const itineraries = useSelector(
    (store) => store.createItinerariesByCityReducer.itineraries
  );

  useEffect(() => {
    dispatch(createCity(params.id));
    dispatch(createItinerariesByCity(params.id));
  }, [params.id, dispatch]);

  useEffect(() => {
    document.title = `${city.city} - MyTinerary`;
  }, [city]);

  if (!city || !city.city || !itineraries) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div
        style={{ backgroundImage: `url(${city.photo})` }}
        className="h-60 bg-cover bg-center"
      >
        <h1 className="text-4xl font-semibold text-white py-10 px-4">
          {city.city}
        </h1>
        <h2 className="text-2xl font-semibold text-white px-4">
          {city.country}
        </h2>
      </div>
      <div className="container mx-auto py-6 px-4">
        <span className="text-xl">
          <p>Population: {city.population}</p>
          <p>Fundation: {city.fundation}</p>
          <p>Featured Locations: {city.featuredLocation}</p>
        </span>
        <p className="mt-4">{city.description}</p>
        <div className="bg-white rounded-md p-4 mt-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 hover:shadow-md transition duration-300 ease-in-out"
          >
            Go Back to Cities
          </button>
        </div>
      </div>
      <div className="container mx-auto py-6 px-4">
        {itineraries.length === 0 ? (
          <NoItinerariesFound />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {itineraries.map((itinerary, index) => (
              <Itinerary data={itinerary} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
