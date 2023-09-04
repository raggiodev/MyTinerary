// import axios from "axios";
// import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
// import {apiURL} from "../../utils/apiURL";

// // Action Types
// export const FETCH_ITINERARIES_BY_CITY = "FETCH_ITINERARIES_BY_CITY";

// // Action Creators
// export const fetchItinerariesByCity = (cityId) => async (dispatch) => {
//   try {
//     const response = await axios.get(`http://localhost:5000/api/itineraries/${cityId}`);
//     dispatch({
//       type: FETCH_ITINERARIES_BY_CITY,
//       payload: response.data.response,
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };