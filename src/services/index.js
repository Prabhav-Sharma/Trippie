import { login, signup, fetchAuthUserDetails } from "./authAPI";
import {
  fetchPosts,
  fetchPostById,
  fetchAllUserPosts,
  addPost,
  deletePost,
  editPost,
  likePost,
  dislikePost,
} from "./postsAPI";

import {
  fetchBookmarks,
  addPostToBookmarks,
  removePostFromBookmarks,
} from "./bookmarksAPI";

import {
  getPostComments,
  addCommentToPost,
  editComment,
  deleteComment,
  likeComment,
  dislikeComment,
  getCommentById,
} from "./commentsAPI";

export {
  login,
  signup,
  fetchAuthUserDetails,
  fetchPosts,
  fetchPostById,
  fetchAllUserPosts,
  addPost,
  deletePost,
  editPost,
  likePost,
  dislikePost,
  fetchBookmarks,
  addPostToBookmarks,
  removePostFromBookmarks,
  getPostComments,
  getCommentById,
  addCommentToPost,
  editComment,
  deleteComment,
  likeComment,
  dislikeComment,
};
