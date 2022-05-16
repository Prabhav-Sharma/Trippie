import { createReducer, createAction } from "@reduxjs/toolkit";

const updatePosts = createAction("UPDATE_POSTS");
const updateUsers = createAction("UPDATE_USERS");

const initialState = { posts: [], users: [] };

const appDataReducer = createReducer(
  initialState,
  {
    [updatePosts]: (state, action) => {
      state.posts = action.payload;
    },
    [updateUsers]: (state, action) => {
      state.users = action.payload;
    },
  },
  [],
  (state) => {
    state;
  }
);

export { appDataReducer, updatePosts, updateUsers };
