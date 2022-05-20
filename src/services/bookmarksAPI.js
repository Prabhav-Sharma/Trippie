import axios from "axios";
import { updateBookmarks } from "../redux";
import { toast } from "react-toastify";

//This API call adds a post to user bookmarks.
const addPostToBookmarks = async (postId, token, dispatcher) => {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/users/bookmark/${postId}`,
      headers: { authorization: token },
    });
    dispatcher(updateBookmarks(response.data.bookmarks));
  } catch (error) {
    toast.error("Couldn't bookmark, try later!");
    console.log(error);
  }
};

//This API call removes a post to user bookmarks.
const removePostFromBookmarks = async (postId, token, dispatcher) => {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/users/remove-bookmark/${postId}`,
      headers: { authorization: token },
    });
    dispatcher(updateBookmarks(response.data.bookmarks));
  } catch (error) {
    toast.error("The servers wants to keep this one here for now!");
    console.log(error);
  }
};

//This API call gets all user bookmarked posts from the db.
const fetchBookmarks = async (token, dispatcher) => {
  try {
    const response = await axios({
      method: "GET",
      url: "/api/users/bookmark/",
      headers: { authorization: token },
    });
    dispatcher(updateBookmarks(response.data.bookmarks));
  } catch (error) {
    console.log(error);
  }
};

export { addPostToBookmarks, removePostFromBookmarks, fetchBookmarks };
