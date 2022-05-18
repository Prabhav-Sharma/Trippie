import { useDispatch, useSelector } from "react-redux";
import { addPostToBookmarks, removePostFromBookmarks } from "../../services";
import { BsBookmark, BsFillBookmarkCheckFill } from "../../Utils/icons";

function BookmarkButton({ postId }) {
  const token = useSelector((state) => state.auth.token);
  const bookmarks = useSelector((state) => state.user.bookmarks);
  const dispatch = useDispatch();

  return bookmarks.some((post) => post._id === postId) ? (
    <BsFillBookmarkCheckFill
      className="text-xl text-sky-500 hover:md:scale-110 cursor-pointer"
      onClick={() => removePostFromBookmarks(postId, token, dispatch)}
    />
  ) : (
    <BsBookmark
      className="text-xl hover:text-sky-500 hover:md:scale-110 cursor-pointer"
      onClick={() => addPostToBookmarks(postId, token, dispatch)}
    />
  );
}

export default BookmarkButton;
