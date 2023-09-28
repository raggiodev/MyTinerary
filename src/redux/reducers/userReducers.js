import {toast} from "react-toastify";
import {createReducer} from "@reduxjs/toolkit";
import localStorageFn from "../../utils/localStorage.js";
import {userSignUp, userSignIn, logInWithToken, userLogOut} from "../actions/userActions.js";

const initialState = {
  user: {},
  token: "",
  isOnline: false,
};

export const userSignUpReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(userSignUp.fulfilled, (store, action) => {
      localStorageFn.set("token", action.payload.token);
      toast.success("Welcome to MyTynerary, " + action.payload.response.name);
      return {
        ...store,
        user: action.payload.response,
        token: action.payload.token,
        isOnline: true,
      };
    })
    .addCase(userSignUp.rejected, (store) => {
      return {
        ...store,
        user: {},
        token: "",
        isOnline: false,
      };
    })
    .addCase(userSignIn.fulfilled, (store, action) => {
      localStorageFn.set("token", action.payload.token);
      toast.success(
        "Ah... you're back here, " + action.payload.response.name + " ... again"
      );
      return {
        ...store,
        user: action.payload.response,
        token: action.payload.token,
        isOnline: true,
      };
    })
    .addCase(userSignIn.rejected, (store) => {
      return {
        ...store,
        user: {},
        token: "",
        isOnline: false,
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
    .addCase(logInWithToken.pending, (store) => {
      return {
        ...store,
        user: {},
        token: "",
        isOnline: false,
      };
    })
    .addCase(logInWithToken.rejected, (store) => {
      return {
        ...store,
        user: {},
        token: "",
        isOnline: false,
      };
    })
    .addCase(userLogOut, (store) => {
      if (store.isOnline) {
        localStorageFn.remove("token");
        toast.success("Good bye, git gud ;)");
      }
      return {
        ...store,
        user: {},
        token: "",
        isOnline: false,
      };
    });
});