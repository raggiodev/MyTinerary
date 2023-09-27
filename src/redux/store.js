import {configureStore} from "@reduxjs/toolkit";
import {userSignUpReducer} from "./reducers/userReducers.js";
import {createCityReducer, createAllCitiesReducer, createItinerariesByCityReducer} from "./reducers/cityReducers.js";

const store = configureStore({
    reducer: {
        createCityReducer,
        createAllCitiesReducer,
        createItinerariesByCityReducer,
        userSignUpReducer,
    }
})

export default store;