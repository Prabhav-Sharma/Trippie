import axios from "axios";
import { updatePosts, updateCurrentPost } from "../redux";
import { toast } from "react-toastify";

const fetchPosts = async (dispatcher) => {
  try {
    const response = await axios.get("/api/posts");
    dispatcher(updatePosts(response.data.posts));
  } catch (error) {
    toast.info("Unable to fetch posts :(");
  }
};

//gets post by postId from the db
const fetchPostById = async (postId, dispatcher, updateCurrent = true) => {
  try {
    const response = await axios.get(`/api/posts/${postId}`);
    updateCurrent && dispatcher(updateCurrentPost(response.data.post)); //Updates the currentPost value in the appData store stata
    return response.data.post;
  } catch (error) {
    toast.info("Unable to fetch post :(");
  }
};

// This API call gets posts by username from the db.
const fetchAllUserPosts = async (username, dispatcher) => {
  try {
    const response = await axios.get(`/api/posts/user/${username}`);
    dispatcher(response.data.posts);
  } catch (error) {
    toast.info("Unable to fetch this user's posts :(");
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
    toast.error("I'm sorry, couldn't share this thought at the moment");
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
    toast.error("Couldn't delete, try again!");
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
    return "SUCCESS";
  } catch (error) {
    toast.error("this post is as stubborn as they come!");
    return "FAILED";
  }
};

const likePost = async (postId, token, dispatcher, updatePost = false) => {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/posts/like/${postId}`,
      headers: { authorization: token },
    });
    dispatcher(updatePosts(response.data.posts));
    updatePost && dispatcher(updateCurrentPost(response.data.post));
  } catch (error) {
    console.log(error);
  }
};

//This API call dislikes a post of the user.
const dislikePost = async (postId, token, dispatcher, updatePost = false) => {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/posts/dislike/${postId}`,
      headers: { authorization: token },
    });
    dispatcher(updatePosts(response.data.posts));
    updatePost && dispatcher(updateCurrentPost(response.data.post));
  } catch (error) {
    toast.error("can't unlike the post. Maybe? Reconsider?");
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
