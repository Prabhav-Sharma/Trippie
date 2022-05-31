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
      <h1 className="text-blue-500 font-medium text-center text-xl md:text-2xl translate-y-2 flex self-center items-center gap-2">
        Bookmarked Posts
        <BsFillBookmarkCheckFill />
      </h1>
      <Feed
        posts={bookmarks}
        finishText={`${
          bookmarks.length === 0 ? "Bookmark posts to see them here!" : ""
        }`}
      />
      {bookmarks.length === 0 && (
        <img
          className=" w-4/5 md:w-2/5 self-center mt-4"
          src="https://res.cloudinary.com/carsmart/image/upload/v1653672221/Trippie/undraw_save_to_bookmarks_re_8ajf_vq53lm.svg"
          alt="Search"
        />
      )}
    </>
  );
}

export default Bookmarks;
