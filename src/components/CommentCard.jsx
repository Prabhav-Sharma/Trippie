import dayjs from "dayjs";
import {
  AiOutlineHeart,
  AiFillHeart,
  BsThreeDotsVertical,
  FaEdit,
  FaTrash,
} from "../Utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { likeComment, dislikeComment, deleteComment } from "../services";
import { unitFormatter } from "../Utils/helpers";
import { useToggle } from "../hooks";
import { useNavigate, useLocation } from "react-router-dom";

function CommentCard({ comment }) {
  const authUsername = useSelector((state) => state.user.username);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { toggle: optionsToggle, setToggle: setOptionsToggle } =
    useToggle(false);

  const {
    _id,
    profileImg,
    username,
    createdAt,
    content,
    postId,
    likes: { likeCount, likedBy },
  } = comment;

  return (
    <div className="flex flex-row bg-transparent border-y border-slate-500 gap-4 p-3 text-white">
      <div className="profile-icon">
        <img className="rounded-full " src={profileImg} alt={username} />
      </div>
      <div className="flex flex-col grow gap-4">
        <span className="flex flex-row gap-3 items-baseline">
          <h4 className="font-openSans font-normal text-sm">@{username}</h4>•
          <h5 className="text-xs font-openSans">
            {dayjs(new Date(createdAt)).format("ddd, DD MMM 'YY")}
          </h5>
        </span>
        <p className="text-xs sm:text-sm md:text-base whitespace-pre-wrap">
          {content}
        </p>
      </div>
      <span className="flex self-center items-center gap-1">
        {likedBy.some((user) => user.username === authUsername) ? (
          <AiFillHeart
            className="text-xl text-sky-500 hover:md:scale-110 cursor-pointer"
            onClick={() => dislikeComment(postId, _id, token, dispatch)}
          />
        ) : (
          <AiOutlineHeart
            className="text-xl hover:cursor-pointer hover:md:scale-110"
            onClick={() => likeComment(postId, _id, token, dispatch)}
          />
        )}
        <p className="text-sm">{unitFormatter(likeCount)}</p>
      </span>
      {authUsername === username && (
        <span className="relative self-center">
          <BsThreeDotsVertical
            className={`${
              optionsToggle && "bg-slate-700"
            } text-3xl hover:cursor-pointer p-1.5 rounded-md`}
            onClick={() => setOptionsToggle((value) => !value)}
          />
          <ul
            className={` ${
              optionsToggle ? "absolute" : "hidden"
            } p-1 h-max w-20 max-h-32 flex flex-col toggle-menu gap-2 items-start bg-gray-800 border border-solid rounded-md border-gray-500 -top-0 -left-21 ml`}
          >
            <li
              className="hover:cursor-pointer  w-full rounded-md p-1 flex items-center gap-1 hover:bg-slate-700 duration-100 ease-linear"
              onClick={() =>
                navigate(`/edit/${postId}/${_id}`, {
                  state: { from: location },
                })
              }
            >
              <FaEdit />
              Edit
            </li>
            <li
              className="hover:cursor-pointer w-full flex rounded-md p-1 items-center gap-1 text-red-500 hover:bg-slate-700 duration-100 ease-linear"
              onClick={() => deleteComment(postId, _id, token, dispatch)}
            >
              <FaTrash />
              Delete
            </li>
          </ul>
        </span>
      )}
    </div>
  );
}

export default CommentCard;
