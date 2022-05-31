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
  const [content, setContent] = useState({ text: undefined, image: "" });
  const { postId, commentId } = useParams();
  const token = useSelector((state) => state.auth.token);
  const location = useLocation();
  const dispatch = useDispatch();

  useDocumentTitle(`Editing ${commentId ? "comment" : "post"}`, [commentId]);

  useEffect(() => {
    (async () => {
      if (commentId) {
        let comment = await getCommentById(postId, commentId);
        setContent(comment);
      } else {
        let post = await fetchPostById(postId, () => {}, false);
        setContent(post);
      }
    })();
  }, [commentId, postId]);

  const editHandler = async (content) => {
    if (commentId) {
      return await editComment(postId, commentId, content, token, dispatch);
    } else return await editPost(postId, content, token, dispatch);
  };

  return (
    <>
      <span className="flex items-center justify-start gap-5 w-full">
        <NavLink
          to={location?.state?.from?.pathname || "/home"}
          className="text-white text-3xl lg:text-5xl w-max -translate-y-1.5 h-min ml-2"
        >
          ‹
        </NavLink>
        <h1 className="text-white text-sm sm:text-base md:text-lg w-max">
          Editing {commentId ? "Comment" : "Post"}
        </h1>
      </span>
      {content.text !== undefined ? (
        <NewContent
          text="Edit"
          placeholder="Edit here!"
          initialContent={content.text}
          initialImage={content.image}
          callback={editHandler}
          pathname={location?.state?.from?.pathname}
        />
      ) : (
        <div className="flex justify-center items-center text-xl  md:text-2xl text-white gap-2 w-full ">
          Loading <BiLoaderAlt className=" animate-spin " />
        </div>
      )}
    </>
  );
}

export default Edit;
