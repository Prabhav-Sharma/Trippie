import axios from "axios";
import { authenticate, addUser, logout } from "../redux";
import { toast } from "react-toastify";

const signup = async (requestBody, dispatcher) => {
  try {
    const response = await axios({
      method: "POST",
      url: "/api/auth/signup",
      data: requestBody,
    });
    localStorage.setItem("token", response.data.encodedToken);
    dispatcher(authenticate(response.data.encodedToken));
    dispatcher(addUser(response.data.createdUser));
    return "SUCCESS";
  } catch (e) {
    console.log(e);
    if (e.response.status === 422) toast.error("Username already taken!");
    else toast.error("Something's not right, I can feel it!");
    return "FAILED";
  }
};

//Login
const login = async (requestBody, dispatcher) => {
  try {
    const response = await axios({
      method: "POST",
      url: "/api/auth/login",
      data: requestBody,
    });
    localStorage.setItem("token", response.data.encodedToken);
    dispatcher(authenticate(response.data.encodedToken));
    dispatcher(addUser(response.data.foundUser));
    return "SUCCESS";
  } catch (e) {
    console.error(e);
    if (e.response.status === 404) toast.error("User not found!");
    else toast.error("Something's not right, I can feel it!");
    return "FAILED";
  }
};

const fetchAuthUserDetails = async (token, dispatcher) => {
  try {
    const response = await axios({
      method: "GET",
      url: "/api/auth/user",
      headers: { authorization: token },
    });
    dispatcher(addUser(response.data.user));
  } catch (e) {
    console.log(e);
    token && toast.info("You need to login!");
    dispatcher(logout());
  }
};

export { login, signup, fetchAuthUserDetails };
