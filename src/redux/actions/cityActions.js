import axios from "axios";
import {toast} from "react-toastify";
import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {apiURL} from "../../utils/apiURL";

// Filtros con "createAction". Actions no va lógica, acá solo van y pasan actions para pasarle al reducer, la lógica va en el reducer.

// Acción para crear una sola ciudad por nombre
export const createCity = createAsyncThunk("createCity", async (name) => {
  try {
    const res = await axios.get(apiURL + "cities/" + name);
    return res.data.response
  }
  catch (error) {
    console.log(error);
    toast.error("So sorry, we were unable to connect to the server. Maybe it's your fault, maybe not...");
    throw new Error(error)
  }
});

// Acción para crear todas las ciudades que coinciden con la búsqueda
export const createAllCities = createAsyncThunk("createAllCities", async () => {
  try {
    const cities = (await axios.get(apiURL + "cities")).data.response;
    return cities
  }
  catch (error) {
    console.log(error);
    toast.error("So sorry, we were unable to connect to the server. Maybe it's your fault, maybe not...");
    throw new Error(error)
  }
});

// - Acción Síncrona -
export const filterCities = createAction("filterCities", (search) => {
  return {
    payload: search
  };
});

// Acción para crear itinerarios por ciudad
export const createItinerariesByCity = createAsyncThunk("createItinerariesByCity", async (city) => {
  try {
    const res = await axios.get(apiURL + "itineraries/" + city);
    return res.data.response
  }
  catch (error) {
    console.log(error);
    toast.error("So sorry, we were unable to connect to the server. Maybe it's your fault, maybe not...");
    throw new Error(error)
  }
});