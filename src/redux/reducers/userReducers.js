import {createReducer} from "@reduxjs/toolkit";
import {userSignUp, userSignIn, logInWithToken, userLogOut} from "../actions/userActions.js";
import localStorageFn from "../../utils/localStorage.js";

const initialState = {
  user: {},
  token: "",
  isOnline: false,
};

export const userSignUpReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(userSignUp.fulfilled, (store, action) => {
      localStorageFn.set("token", action.payload.token);
      return {
        ...store,
        user: action.payload.response,
        token: action.payload.token,
        isOnline: true,
      };
    })
    .addCase(userSignIn.fulfilled, (store, action) => {
      localStorageFn.set("token", action.payload.token);
      return {
        ...store,
        user: action.payload.response,
        token: action.payload.token,
        isOnline: true,
      };
    })
    .addCase(logInWithToken.fulfilled, (store, action) => {
      return {
        ...store,
        user: action.payload.response,
        token: action.payload.token,
        isOnline: true,
      };
    })
    .addCase(userLogOut, (store) => {
      localStorageFn.remove("token");
      return {
        ...store,
        user: {},
        token: "",
        isOnline: false,
      };
    });
});