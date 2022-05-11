import axios from "axios";
import { authenticate, fetchUser } from "../redux";

const signup = async (requestBody, dispatcher) => {
  try {
    const response = await axios({
      method: "POST",
      url: "/api/auth/signup",
      data: requestBody,
    });
    localStorage.setItem("token", response.data.encodedToken);
    dispatcher(
      authenticate({
        user: response.data.createdUser,
        token: response.data.encodedToken,
      })
    );
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
    dispatcher(
      authenticate({
        user: response.data.foundUser,
        token: response.data.encodedToken,
      })
    );
    // To be added later:toast.success(`Welcome back ${response.data.foundUser.fullName}`);
    return "SUCCESS";
  } catch (e) {
    console.error(e);
    // To be added later: toast.error("Was that a thud in the server room!?");
    return "FAILED";
  }
};

const fetchUserDetails = async (userId, dispatcher) => {
  try {
    const response = await axios({
      method: "GET",
      url: `/api/users/${userId}`,
    });
    dispatcher(fetchUser({ user: response.data.user }));
  } catch (e) {
    console.log(e);
  }
};

export { login, signup, fetchUserDetails };
