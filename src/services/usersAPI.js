import axios from "axios";
import { updateUsers, updateFollowing } from "../redux";

const fetchUsers = async (dispatcher) => {
  try {
    const response = await axios.get("/api/users");
    dispatcher(updateUsers(response.data.users));
  } catch (error) {
    console.log(error);
  }
};

const followUser = async (followUserId, token, dispatcher) => {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/users/follow/${followUserId}`,
      headers: { authorization: token },
    });
    dispatcher(updateFollowing(response.data.following));
  } catch (error) {
    console.log(error);
  }
};

// This API call is responsible for unfollow action by the user
const unfollowUser = async (followUserId, token, dispatcher) => {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/users/unfollow/${followUserId}`,
      headers: { authorization: token },
    });
    dispatcher(updateFollowing(response.data.following));
  } catch (error) {
    console.log(error);
  }
};

export { fetchUsers, followUser, unfollowUser };
