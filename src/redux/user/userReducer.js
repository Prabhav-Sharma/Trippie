import { createReducer, createAction } from "@reduxjs/toolkit";

const addUser = createAction("ADD_USER");
const updateBookmarks = createAction("UPDATE_BOOKMARKS");
const updateFollowing = createAction("UPDATE_FOLLOWING");

const initialState = {
  _id: "",
  createdAt: "",
  updatedAt: "",
  username: "",
  email: "",
  followers: [],
  following: [],
  bookmarks: [],
};

const userReducer = createReducer(initialState, {
  [addUser]: (state, action) => {
    state._id = action.payload._id;
    state.createdAt = action.payload.createdAt;
    state.updatedAt = action.payload.updatedAt;
    state.username = action.payload.username;
    state.email = action.payload.email;
    state.followers = action.payload.followers;
    state.following = action.payload.following;
    state.bookmarks = action.payload.bookmarks;
    state.profileImg = action.payload.profileImg;
  },
  [updateBookmarks]: (state, action) => {
    state.bookmarks = action.payload;
  },
  [updateFollowing]: (state, action) => {
    state.following = action.payload;
  },
});

export { userReducer, addUser, updateBookmarks, updateFollowing };
