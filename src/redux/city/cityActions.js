import { FETCH_CITIES_SUCCESS, FETCH_CITIES_FAILURE } from "./cityTypes";
import { apiURL } from "../../utils/apiURL";
import axios from "axios";

export const fetchCities = () => (dispatch) => {
  fetch(apiURL + "cities")
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: FETCH_CITIES_SUCCESS,
        payload: data.response,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_CITIES_FAILURE,
        payload: error.message,
      });
    });
};

export const deleteItinerary = (itineraryId) => async (dispatch) => {
  try {
    await axios.delete(`/api/itineraries/${itineraryId}`);
    dispatch({ type: "DELETE_ITINERARY_SUCCESS", payload: itineraryId });
  } catch (error) {
    dispatch({ type: "DELETE_ITINERARY_FAILURE", payload: error.message });
  }
};