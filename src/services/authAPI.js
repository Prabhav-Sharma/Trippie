import axios from "axios";
import { authenticate, addUser } from "../redux";

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

    // To be added later: toast.success(`Welcome on board, ${response.data.createdUser.fullName}`);
    return "SUCCESS";
  } catch (e) {
    console.log(e);
    // To be added later:toast.error("Was that a thud in the server room!?");
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
    // To be added later:toast.success(`Welcome back ${response.data.foundUser.fullName}`);
    return "SUCCESS";
  } catch (e) {
    console.error(e);
    // To be added later: toast.error("Was that a thud in the server room!?");
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
  }
};

export { login, signup, fetchAuthUserDetails };
