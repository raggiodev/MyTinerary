import {configureStore} from "@reduxjs/toolkit";
import {createCityReducer, createAllCitiesReducer, createItinerariesByCityReducer} from "./reducers/cityReducers.js";
import {userSignUpReducer} from './reducers/UserReducers.js';

const store = configureStore({
    reducer: {
        createCityReducer,
        createAllCitiesReducer,
        createItinerariesByCityReducer,
        userSignUpReducer: userSignUpReducer
    }
})

export default store;