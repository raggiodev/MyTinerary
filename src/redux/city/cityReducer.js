import {FETCH_CITIES_SUCCESS, FETCH_CITIES_FAILURE} from "./cityTypes";

const initialState = {
  cities: [],
  loading: true,
  error: null,
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_CITIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cityReducer;