import axios from "axios";
import {toast} from "react-toastify";
import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import localStorageFn from "../../utils/localStorage.js";
import {apiURL} from "../../utils/apiURL";

export const userSignUp = createAsyncThunk("userSignUp", async (userData) => {
  try {
    const res = await axios.post(apiURL + "auth/signUp", {
      ...userData,
    });
    return res.data;
  }
  catch (error) {
    console.log(error);
    toast.error(error.response.data.error);
    throw new Error(error);
  }
});

export const userSignIn = createAsyncThunk("userSignIn", async (userData) => {
  try {
    const res = await axios.post(apiURL + "auth/signIn", {
      ...userData,
    });
    return res.data;
  }
  catch (error) {
    console.log(error);
    toast.error(error.response.data.error);
    throw new Error(error);
  }
});

export const logInWithToken = createAsyncThunk("logInWithToken", async () => {
  const token = localStorageFn.getText("token");
  const res = await axios.get(apiURL + "auth/token", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.data;
});

export const userLogOut = createAction("userLogOut", () => {
  return {
    payload: "",
  };
});