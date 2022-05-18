import store from "./store";
import { authReducer, authenticate, logout } from "./auth/authReducer";

import {
  userReducer,
  addUser,
  updateBookmarks,
  updateFollowing,
} from "./user/userReducer";

import {
  appDataReducer,
  updatePosts,
  updateUsers,
  updateCurrentPost,
  updateComments,
} from "./appData/appDataReducer";

export {
  authReducer,
  authenticate,
  logout,
  store,
  userReducer,
  addUser,
  updateBookmarks,
  appDataReducer,
  updatePosts,
  updateUsers,
  updateFollowing,
  updateCurrentPost,
  updateComments,
};
