import { useEffect, useState } from "react";
import { useParams, NavLink, useLocation } from "react-router-dom";
import { fetchPostById, addCommentToPost } from "../services";
import { NewContent, PostCard, Feed } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { BiLoaderAlt } from "../Utils/icons";
import { useDocumentTitle } from "../hooks";

function Post() {
  const { postId } = useParams();
  const currentPost = useSelector((state) => state.appData.currentPost);
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const location = useLocation();
  const { comments, username } = currentPost;

  useDocumentTitle(`Post by @${username}`, [username]);

  useEffect(() => {
    (async () => {
      await fetchPostById(postId, dispatch);
      setLoading(false);
    })();
  }, [postId]);

  const addCommentHandler = async (text) => {
    return await addCommentToPost(
      postId,
      { content: text.trim() },
      token,
      dispatch
    );
  };

  return (
    <>
      <span className="flex items-center justify-start gap-5 w-full">
        <NavLink
          to="/home"
          className="text-white text-3xl lg:text-5xl w-max -translate-y-1.5 h-min ml-2"
        >
          ‹
        </NavLink>
        <h1 className="text-white text-sm sm:text-base md:text-lg w-max">
          Post
        </h1>
      </span>
      {loading ? (
        <div className=" flex justify-center items-center text-xl  md:text-2xl text-white gap-2 w-full ">
          Loading <BiLoaderAlt className=" animate-spin " />
        </div>
      ) : (
        <>
          <PostCard post={currentPost} location="POST" />
          <NewContent
            text="Comment"
            callback={addCommentHandler}
            placeholder={"Add your comment here!"}
            focus={location.state === "COMMENT"}
          />
          <Feed
            posts={comments}
            type="COMMENT"
            finishText={
              comments.length === 0 ? "No Comments" : "No more comments"
            }
          />
        </>
      )}
    </>
  );
}

export default Post;
