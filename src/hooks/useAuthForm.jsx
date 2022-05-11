import { useReducer } from "react";
import {
  EMAIL_ACTION,
  USERNAME_ACTION,
  PASSWORD_ACTION,
  CONFIRM_PASSWORD_ACTION,
  FULL_NAME_ACTION,
} from "../Utils/constants";

const authFormReducer = (state, action) => {
  switch (action.type) {
    case FULL_NAME_ACTION:
      return { ...state, fullName: action.payload.fullName };
    case EMAIL_ACTION:
      return { ...state, email: action.payload.email };
    case USERNAME_ACTION:
      return { ...state, username: action.payload.username };
    case PASSWORD_ACTION:
      return { ...state, password: action.payload.password };
    case CONFIRM_PASSWORD_ACTION:
      return { ...state, confirmPassword: action.payload.confirmPassword };
    default:
      return state;
  }
};

const useAuthForm = () => {
  const [authFormState, authFormDispatch] = useReducer(authFormReducer, {
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return { authFormState, authFormDispatch };
};

export default useAuthForm;
