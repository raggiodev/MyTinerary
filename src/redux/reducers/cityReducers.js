import {createReducer} from "@reduxjs/toolkit";
import {createCity, createAllCities, filterCities, createItinerariesByCity} from "../actions/cityActions.js";

const initialState = {
  cities: [],
  citiesFiltered: [],
  city: {},
  itineraries: []
};

export const createCityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createCity.fulfilled, (store, action) => {
      const newCity = { ...store, city: action.payload };
      return newCity
    })
    .addCase(createCity.pending, (store) => {
      return {
        ...store,
        city: "loading"
      };
    })
    .addCase(createCity.rejected, (store) => {
      return {
        ...store,
        city: {}
      };
    });
});

export const createAllCitiesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createAllCities.fulfilled, (store, action) => {
      return {
        ...store,
        cities: action.payload,
        citiesFiltered: action.payload
      };
    })
    .addCase(createAllCities.pending, (store) => {
      return {
        ...store,
        citiesFiltered: "loading"
      };
    })
    .addCase(createAllCities.rejected, (store) => {
      return {
        ...store,
        citiesFiltered: []
      };
    })

    .addCase(filterCities, (store, action) => {
      const searchCities = action.payload.toLowerCase().trim();
      const newFilteredCities = store.cities.filter((c) =>
        c.city.toLowerCase().trim().startsWith(searchCities)
      );
      return {
        ...store,
        citiesFiltered: newFilteredCities
      };
    });
});

export const createItinerariesByCityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createItinerariesByCity.fulfilled, (store, action) => {
      const newItineraries = { ...store, itineraries: action.payload };
      return newItineraries;
    })
    .addCase(createItinerariesByCity.pending, (store) => {
      return {
        ...store,
        itineraries: "loading"
      };
    })
    .addCase(createItinerariesByCity.rejected, (store) => {
      return {
        ...store,
        itineraries: []
      };
    });
  }
);