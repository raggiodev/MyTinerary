import {createReducer} from "@reduxjs/toolkit";
import {createCity, createAllCities, filterCities, fetchItinerariesByCity} from "../actions/cityActions.js";

const initialState = {
  cities: [],
  citiesFiltered: [],
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
          const newCities = { ...store, cities: action.payload, citiesFiltered: action.payload}
          return newCities
      })
      .addCase(filterCities, (store,action) => {
        const searchCities = action.payload.toLowerCase().trim()
        const newFilteredCities = store.cities.filter(e => e.city.toLowerCase().trim().startsWith(searchCities))
        return {
          ...store,
          citiesFiltered: newFilteredCities
        }
      });
})

export const createItinerariesByCityReducer = createReducer(initialState, (builder)=> {
  builder
      .addCase(fetchItinerariesByCity.fulfilled, (store,action)=>{
          const newItineraries = { ...store, itineraries: action.payload}
          return newItineraries
      })
})