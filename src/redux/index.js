import store from "./store";
import {
  authReducer,
  authenticate,
  logout,
  fetchUser,
} from "./auth/authReducer";

export { authReducer, authenticate, logout, store, fetchUser };
