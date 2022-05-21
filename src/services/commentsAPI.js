import axios from "axios";
import { updateComments } from "../redux";
import { toast } from "react-toastify";

const getPostComments = async (postId, dispatcher) => {
  try {
    const response = await axios.get(`/api/comments/${postId}`);
    dispatcher(updateComments(response.data.comments));
  } catch (error) {
    toast.info("Unable to comments for this post");
  }
};

const getCommentById = async (postId, commentId) => {
  try {
    const response = await axios.get(`/api/comments/${postId}/${commentId}`);
    return response.data.comment;
  } catch (error) {
    console.log(error);
    toast.info("Failed to fetch comment");
  }
};

//This API adds a comment to a particualar post
const addCommentToPost = async (postId, commentData, token, dispatcher) => {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/comments/add/${postId}`,
      headers: { authorization: token },
      data: { commentData },
    });
    dispatcher(updateComments(response.data.comments));
    return "SUCCESS";
  } catch (error) {
    toast.error("Couldn't add comment :/");
  }
};

//This API edits a comment of a particualar post.
const editComment = async (
  postId,
  commentId,
  commentData,
  token,
  dispatcher
) => {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/comments/edit/${postId}/${commentId}`,
      headers: { authorization: token },
      data: { commentData },
    });
    dispatcher(updateComments(response.data.comments));
    return "SUCCESS";
  } catch (error) {
    toast.error("We can't edit the comment right now :/");
    return "FAILED";
  }
};

//This API deletes a comment of a particualar post.
const deleteComment = async (postId, commentId, token, dispatcher) => {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/comments/delete/${postId}/${commentId}`,
      headers: { authorization: token },
    });
    dispatcher(updateComments(response.data.comments));
  } catch (error) {
    toast.error("This comment should've been deleted by now :/");
  }
};

//This API adds an likes a comment of a particular post.
const likeComment = async (postId, commentId, token, dispatcher) => {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/comments/upvote/${postId}/${commentId}`,
      headers: { authorization: token },
    });
    dispatcher(updateComments(response.data.comments));
  } catch (error) {
    toast.error("Couldn't make your love reach them, try later!");
  }
};

//This API adds a dislikes a comment of a particular post.
const dislikeComment = async (postId, commentId, token, dispatcher) => {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/comments/downvote/${postId}/${commentId}`,
      headers: { authorization: token },
    });
    dispatcher(updateComments(response.data.comments));
  } catch (error) {
    toast.error("Couldn't remove like, try later!");
  }
};

export {
  getPostComments,
  getCommentById,
  addCommentToPost,
  editComment,
  deleteComment,
  likeComment,
  dislikeComment,
};
