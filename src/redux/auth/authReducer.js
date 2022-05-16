import { createReducer, createAction } from "@reduxjs/toolkit";

let token = localStorage.getItem("token");
let isAuthenticated = token ? true : false;
const initialState = {
  token,
  isAuthenticated,
};

const authenticate = createAction("AUTHENTICATE");
const logout = createAction("LOGOUT");

const authReducer = createReducer(
  initialState,
  {
    [authenticate]: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    [logout]: (state) => {
      localStorage.removeItem("token");
      state.isAuthenticated = false;
      state.token = undefined;
    },
  },
  [],
  (state) => {
    state;
  }
);

export { authReducer, authenticate, logout };
