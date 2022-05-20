import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookmarks } from "../services";
import { Feed } from "../components";
import { BsFillBookmarkCheckFill } from "../Utils/icons";
import { useDocumentTitle } from "../hooks";

function Bookmarks() {
  const token = useSelector((state) => state.auth.token);
  const bookmarks = useSelector((state) => state.user.bookmarks);
  const dispatch = useDispatch();

  useDocumentTitle("Bookmarks");

  useEffect(() => {
    fetchBookmarks(token, dispatch);
  }, []);

  return (
    <>
      <h1 className="text-white text-center text-base md:text-xl translate-y-2 flex self-center items-center gap-2">
        Bookmarked Posts
        <BsFillBookmarkCheckFill />
      </h1>
      <Feed
        posts={bookmarks}
        finishText={`${
          bookmarks.length === 0 ? "Bookmark posts to see them here!" : ""
        }`}
      />
    </>
  );
}

export default Bookmarks;
