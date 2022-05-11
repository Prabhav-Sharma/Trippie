import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false, token: null, user: {} };

const authenticate = createAction("AUTHENTICATE");
const logout = createAction("LOGOUT");
const fetchUser = createAction("FETCH_USER");

const authReducer = createReducer(
  initialState,
  {
    [authenticate]: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    [logout]: () => initialState,
    [fetchUser]: (state) => {
      state.user = action.payload.user;
    },
  },
  [],
  (state) => {
    state;
  }
);

export { authReducer, authenticate, logout, fetchUser };
