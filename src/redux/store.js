import {configureStore} from "@reduxjs/toolkit";
import {createCityReducer, createAllCitiesReducer, createItinerariesByCityReducer} from "./reducers/cityReducers.js";
import {userSignUpReducer} from "./reducers/userReducers.js";

const store = configureStore({
    reducer: {
        createCityReducer,
        createAllCitiesReducer,
        createItinerariesByCityReducer,
        userSignUpReducer,
    }
})

export default store;