const initialState = {
  itineraries: [],
  error: null,
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CITIES_SUCCESS":
      return { ...state, cities: action.payload, error: null };
    case "FETCH_CITIES_FAILURE":
      return { ...state, cities: [], error: action.payload };
    case "DELETE_ITINERARY_SUCCESS": {
      const updatedItineraries = state.itineraries.filter(
        (itinerary) => itinerary._id !== action.payload
      );
      return { ...state, itineraries: updatedItineraries, error: null };
    }
    case "DELETE_ITINERARY_FAILURE":
      return { ...state, error: action.payload };
    case "CREATE_ITINERARY_SUCCESS":
      return {
        ...state,
        itineraries: [...state.itineraries, action.payload],
        error: null,
      };
    case "CREATE_ITINERARY_FAILURE":
      return { ...state, error: action.payload };
    case "FETCH_ITINERARIES_BY_CITY":
      return { ...state, itineraries: action.payload, error: null };
    default:
      return state;
  }
};

export default cityReducer;