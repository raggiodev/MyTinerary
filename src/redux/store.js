import {configureStore} from "@reduxjs/toolkit";
import {createCityReducer, createAllCitiesReducer, createItinerariesByCityReducer} from "./reducers/cityReducers.js";

const store = configureStore({
    reducer: {
        createCityReducer,
        createAllCitiesReducer,
        createItinerariesByCityReducer,
    }
})

export default store;