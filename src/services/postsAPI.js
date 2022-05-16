import axios from "axios";
import { updatePosts } from "../redux";

const fetchPosts = async (dispatcher) => {
  try {
    const response = await axios.get("/api/posts");
    dispatcher(updatePosts(response.data.posts));
  } catch (error) {
    console.log(error);
  }
};

//gets post by postId from the db
const fetchPostById = async (postId, dispatcher) => {
  try {
    const response = await axios.get(`/api/posts/${postId}`);
    dispatcher(getPostById(response.data.post));
  } catch (error) {
    console.log(error);
  }
};

// This API call gets posts by username from the db.
const fetchAllUserPosts = async (username, dispatcher) => {
  try {
    const response = await axios.get(`/api/posts/user/${username}`);
    dispatcher(getUserPosts(response.data.posts));
  } catch (error) {
    console.log(error);
  }
};

//This API call creates a new post to the user's db. (Protected)
const addPost = async (post, token, dispatcher) => {
  try {
    const response = await axios({
      method: "POST",
      url: "/api/posts",
      headers: { authorization: token },
      data: { postData: post },
    });
    dispatcher(updatePosts(response.data.posts));
    return "SUCCESS";
  } catch (error) {
    console.log(error);
    return "FAILED";
  }
};

//This API call deletes a post from the user's db
const deletePost = async (postId, token, dispatcher) => {
  try {
    const response = await axios({
      method: "DELETE",
      url: `/api/posts/${postId}`,
      headers: { authorization: token },
    });

    dispatcher(updatePosts(response.data.posts));
  } catch (error) {
    console.log(error);
  }
};

//This API call edits a post of the user
const editPost = async (postId, postData, token, dispatcher) => {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/posts/edit/${postId}`,
      headers: { authorization: token },
      data: { postData },
    });
    dispatcher(updatePosts(response.data.posts));
  } catch (error) {
    console.log(error);
  }
};

const likePost = async (postId, token, dispatcher) => {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/posts/like/${postId}`,
      headers: { authorization: token },
    });
    dispatcher(updatePosts(response.data.posts));
  } catch (error) {
    console.log(error);
  }
};

//This API call dislikes a post of the user.
const dislikePost = async (postId, token, dispatcher) => {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/posts/dislike/${postId}`,
      headers: { authorization: token },
    });
    dispatcher(updatePosts(response.data.posts));
  } catch (error) {
    console.log(error);
  }
};

export {
  fetchPosts,
  fetchPostById,
  fetchAllUserPosts,
  addPost,
  deletePost,
  editPost,
  likePost,
  dislikePost,
};
