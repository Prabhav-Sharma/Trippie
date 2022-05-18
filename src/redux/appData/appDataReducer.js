import { createReducer, createAction } from "@reduxjs/toolkit";

const updatePosts = createAction("UPDATE_POSTS");
const updateUsers = createAction("UPDATE_USERS");
const updateCurrentPost = createAction("UPDATE_CURRENT_POST");
const updateComments = createAction("UPDATE_COMMENTS");

const initialState = {
  posts: [],
  users: [],
  currentPost: {
    content: "Loading...",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "Loading...",
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    profileImg:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
};

const appDataReducer = createReducer(
  initialState,
  {
    [updatePosts]: (state, action) => {
      state.posts = action.payload;
    },
    [updateUsers]: (state, action) => {
      state.users = action.payload;
    },
    [updateCurrentPost]: (state, action) => {
      state.currentPost = action.payload;
    },
    [updateComments]: (state, action) => {
      state.currentPost.comments = action.payload;
    },
  },
  [],
  (state) => {
    state;
  }
);

export {
  appDataReducer,
  updatePosts,
  updateUsers,
  updateCurrentPost,
  updateComments,
};
