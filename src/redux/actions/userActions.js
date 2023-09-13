import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {apiURL} from "../../utils/apiURL";
import axios from "axios";
import localStorageFn from "../../utils/localStorage.js";

export const userSignUp = createAsyncThunk("userSignUp", async (userData) => {
  try {
    const res = await axios.post(apiURL + "auth/signUp", {
      ...userData,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return {};
  }
});

export const userSignIn = createAsyncThunk("userSignIn", async (userData) => {
  try {
    const res = await axios.post(apiURL + "auth/signIn", {
      ...userData,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return {};
  }
});

export const logInWithToken = createAsyncThunk("logInWithToken", async () => {
  try {
    const token = localStorageFn.getText("token");
    const res = await axios.get(apiURL + "auth/token", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return {};
  }
});

export const userLogOut = createAction("userLogOut", () => {
  return {
    payload: "",
  };
});