import {configureStore} from '@reduxjs/toolkit';
import {createAllCitiesReducer, createCityReducer, createItinerariesByCityReducer} from './city/cityReducer.js';

const store = configureStore({
    reducer: {
        createAllCitiesReducer,
        createCityReducer,
        createItinerariesByCityReducer,
    }
})

export default store;