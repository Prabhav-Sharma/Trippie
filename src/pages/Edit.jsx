import { useEffect, useState } from "react";
import { NewContent } from "../components";
import { useParams, useLocation, NavLink } from "react-router-dom";
import {
  editComment,
  editPost,
  fetchPostById,
  getCommentById,
} from "../services";
import { BiLoaderAlt } from "../Utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { useDocumentTitle } from "../hooks";

function Edit() {
  const [content, setContent] = useState("");
  const { postId, commentId } = useParams();
  const token = useSelector((state) => state.auth.token);
  const location = useLocation();
  const dispatch = useDispatch();

  useDocumentTitle(`Editing ${commentId ? "comment" : "post"}`, [commentId]);

  useEffect(() => {
    (async () => {
      if (commentId) {
        let comment = await getCommentById(postId, commentId, setContent);
        setContent(comment.content);
      } else {
        let post = await fetchPostById(postId, () => {}, false);
        setContent(post.content);
      }
    })();
  }, [commentId, postId]);

  const editHandler = async (text) => {
    if (commentId) {
      return await editComment(
        postId,
        commentId,
        { content: text },
        token,
        dispatch
      );
    } else return await editPost(postId, { content: text }, token, dispatch);
  };

  return (
    <>
      <span className="flex items-center justify-start gap-5 w-full">
        <NavLink
          to={location?.state?.from?.pathname || "/home"}
          className="text-white text-5xl w-max -translate-y-1.5 h-min ml-2"
        >
          ‹
        </NavLink>
        <h1 className="text-white text-xl w-max">
          Editing {commentId ? "Comment" : "Post"}
        </h1>
      </span>
      {content ? (
        <NewContent
          text="Edit"
          placeholder="Edit here!"
          initialContent={content}
          callback={editHandler}
          pathname={location?.state?.from?.pathname}
        />
      ) : (
        <div className="flex justify-center items-center text-3xl text-white gap-2 w-full ">
          Loading <BiLoaderAlt className=" animate-spin " />
        </div>
      )}
    </>
  );
}

export default Edit;
