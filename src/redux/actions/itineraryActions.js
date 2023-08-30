import axios from "axios";

// Action Types
export const FETCH_ITINERARIES_BY_CITY = "FETCH_ITINERARIES_BY_CITY";

// Action Creators
export const fetchItinerariesByCity = (cityId) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/cities/${cityId}/itineraries`);
    dispatch({
      type: FETCH_ITINERARIES_BY_CITY,
      payload: response.data.response,
    });
  } catch (error) {
    console.error(error);
  }
};