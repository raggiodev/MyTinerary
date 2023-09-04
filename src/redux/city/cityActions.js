import axios from "axios";
import {apiURL} from "../../utils/apiURL";

// Acción para crear una sola ciudad por nombre
export const createCity = (name) => async (dispatch) => {
  try {
    const res = await axios.get(apiURL + "cities/" + name);
    dispatch({ type: "READ_ONE_CITY_SUCCESS", payload: res.data.response });
  } catch (error) {
    dispatch({ type: "READ_ONE_CITY_FAILURE", payload: error.message });
  }
};

// Acción para crear itinerarios por ciudad
export const createItinerariesByCity = (city) => async (dispatch) => {
  try {
    const res = await axios.get(apiURL + "itineraries/" + city);
    dispatch({ type: "READ_ITINERARIES_BY_CITY_SUCCESS", payload: res.data.response });
  } catch (error) {
    dispatch({ type: "READ_ITINERARIES_BY_CITY_FAILURE", payload: error.message });
  }
};

// Acción para crear todas las ciudades que coinciden con la búsqueda
export const createAllCities = (inputSearch) => async (dispatch) => {
  try {
    const res = await axios.get(apiURL + "cities");
    const search = inputSearch.toLowerCase().trim();
    const filteredCities = res.data.response.filter((c) =>
      c.city.toLowerCase().trim().startsWith(search)
    );
    dispatch({ type: "READ_ALL_CITIES_SUCCESS", payload: filteredCities });
  } catch (error) {
    dispatch({ type: "READ_ALL_CITIES_FAILURE", payload: error.message });
  }
};

// Acción para crear un nuevo itinerario
export const createItinerary = (cityId, newItineraryData) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/cities/${cityId}/itineraries`, newItineraryData);
    dispatch({ type: "CREATE_ITINERARY_SUCCESS", payload: response.data });
  }
  catch (error) {
    dispatch({ type: "CREATE_ITINERARY_FAILURE", payload: error.message });
  }
};

// Acción para eliminar un itinerario
export const deleteItinerary = (itineraryId) => async (dispatch) => {
  try {
    await axios.delete(`/api/itineraries/${itineraryId}`);
    dispatch({ type: "DELETE_ITINERARY_SUCCESS", payload: itineraryId });
  }
  catch (error) {
    dispatch({ type: "DELETE_ITINERARY_FAILURE", payload: error.message });
  }
};

// Acción para fetchear itinerarios por ciudad
export const fetchItinerariesByCity = (cityId) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/cities/${cityId}/itineraries`);
    dispatch({ type: "FETCH_ITINERARIES_BY_CITY", payload: response.data.response });
  }
  catch (error) {
    console.error(error);
  }
};