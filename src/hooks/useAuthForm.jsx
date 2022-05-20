import { useReducer } from "react";
import { authFormReducer } from "../Utils/helpers";

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
