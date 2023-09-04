import axios from "axios";
import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {apiURL} from "../../utils/apiURL";

// Filtros con creteActions. Actions no va lógica, acá solo van y pasan actions para pasarle al reducer, la lógica va en el reducer.

// Acción para crear una sola ciudad por nombre
export const createCity = createAsyncThunk("city/createCity", async (name) => {
  const res = await axios.get(apiURL + "cities/" + name);
  return res.data.response;
});

// Acción para crear todas las ciudades que coinciden con la búsqueda
export const createAllCities = createAsyncThunk("city/createAllCities", async () => {
    const res = await axios.get(apiURL + "cities");
    // const search = inputSearch.toLowerCase().trim();
    // const filteredCities = res.data.response.filter((c) => c.city.toLowerCase().trim().startsWith(search));
    return res.data.response;
  }
);

  export const filterCities = createAction('filterCities', (search) => { // Acción síncrona
    return {
      payload: search
    }
});

// Acción para crear itinerarios por ciudad
export const createItinerariesByCity = createAsyncThunk("city/createItinerariesByCity", async (city) => {
    const res = await axios.get(apiURL + "itineraries/" + city);
    return res.data.response;
  }
);

// Acción para crear un nuevo itinerario
export const createItinerary = createAsyncThunk("city/createItinerary", async (cityId, newItineraryData) => {
    const response = await axios.post(`/api/cities/${cityId}/itineraries`, newItineraryData);
    return response.data;
  }
);

// Acción para eliminar un itinerario
export const deleteItinerary = createAsyncThunk("city/deleteItinerary", async (itineraryId) => {
    await axios.delete(`/api/itineraries/${itineraryId}`);
    return itineraryId;
  }
);

// Acción para fetchear itinerarios por ciudad
export const fetchItinerariesByCity = createAsyncThunk("city/fetchItinerariesByCity", async (cityId) => {
    const response = await axios.get(`/api/cities/${cityId}/itineraries`);
    return response.data.response;
  }
);