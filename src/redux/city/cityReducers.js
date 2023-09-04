import {createReducer} from "@reduxjs/toolkit";
import {createCity, createAllCities, createItinerariesByCity} from "./cityActions.js";

const initialState = {
  cities: [],
  city: {},
  itineraries: [],
}

export const createCityReducer = createReducer(initialState, (builder)=> {
  builder
      .addCase(createCity.fulfilled, (store,action)=>{
          const newCity = { ...store, city: action.payload}
          return newCity
      })
})

export const createAllCitiesReducer = createReducer(initialState, (builder)=> {
  builder
      .addCase(createAllCities.fulfilled, (store,action)=>{
          const newCities = { ...store, cities: action.payload}
          return newCities
      })
})

export const createItinerariesByCityReducer = createReducer(initialState, (builder)=> {
  builder
      .addCase(createItinerariesByCity.fulfilled, (store,action)=>{
          const newItineraries = { ...store, itineraries: action.payload}
          return newItineraries
      })
})