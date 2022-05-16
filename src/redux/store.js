import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authReducer";
import { userReducer } from "./user/userReducer";
import { appDataReducer } from "./appData/appDataReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    appData: appDataReducer,
  },
});

export default store;
