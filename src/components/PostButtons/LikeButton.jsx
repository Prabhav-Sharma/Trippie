import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "../../Utils/icons";
import { likePost, dislikePost } from "../../services";

function LikeButton({ postId, likedBy, location }) {
  const userId = useSelector((state) => state.user._id);
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();
  return likedBy.some((user) => user._id === userId) ? (
    <AiFillHeart
      className="text-xl text-sky-500 hover:md:scale-110 cursor-pointer"
      onClick={() => dislikePost(postId, token, dispatch, location === "POST")}
    />
  ) : (
    <AiOutlineHeart
      className="text-xl hover:text-sky-500 hover:md:scale-110 cursor-pointer"
      onClick={() => likePost(postId, token, dispatch, location === "POST")}
    />
  );
}

export default LikeButton;
