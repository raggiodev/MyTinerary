import { FETCH_CITIES_SUCCESS, FETCH_CITIES_FAILURE } from "./cityTypes";
import { apiURL } from "../../utils/apiURL";

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