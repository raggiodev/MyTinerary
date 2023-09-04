import {createReducer} from "@reduxjs/toolkit";
import {createAllCities, createCity, createItinerariesByCity} from "../city/cityActions";

const initialState = {
    cities : [],
    city : {},
    itineraries: []
}

export const readAllCitiesReducer = createReducer(initialState, (builder)=> {
    builder
        .addCase(createAllCities.fulfilled, (store,action)=>{
            const newCities = { ...store, cities: action.payload}
            return newCities
        })
})

export const readOneCityReducer = createReducer(initialState, (builder)=> {
    builder
        .addCase(createCity.fulfilled, (store,action)=>{
            const newCity = { ...store, city: action.payload}
            return newCity
        })
})

export const readItinerariesByCityReducer = createReducer(initialState, (builder)=> {
    builder
        .addCase(createItinerariesByCity.fulfilled, (store,action)=>{
            const newItineraries = { ...store, itineraries: action.payload}
            return newItineraries
        })
})