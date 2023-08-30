import axios from "axios";

// Acción para crear un nuevo itinerario
export const createItinerary = (cityId, newItineraryData) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/cities/${cityId}/itineraries`, newItineraryData);
    dispatch({ type: "CREATE_ITINERARY_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "CREATE_ITINERARY_FAILURE", payload: error.message });
  }
};

// Acción para eliminar un itinerario
export const deleteItinerary = (itineraryId) => async (dispatch) => {
  try {
    await axios.delete(`/api/itineraries/${itineraryId}`);
    dispatch({ type: "DELETE_ITINERARY_SUCCESS", payload: itineraryId });
  } catch (error) {
    dispatch({ type: "DELETE_ITINERARY_FAILURE", payload: error.message });
  }
};