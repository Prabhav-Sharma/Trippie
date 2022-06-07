import dayjs from "dayjs";
import {
  BiComment,
  FiShare,
  BsThreeDotsVertical,
  FaEdit,
  FaTrash,
} from "../Utils/icons";
import { LikeButton, BookmarkButton } from ".";
import { unitFormatter } from "../Utils/helpers";
import { FALLBACK_IMG } from "../Utils/constants";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useToggle } from "../hooks";
import { deletePost } from "../services";
import { toast } from "react-toastify";

function PostCard({ post, location = "HOME" }) {
  const authUsername = useSelector((state) => state.user.username);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const browserLocation = useLocation();
  const dispatch = useDispatch();

  const { toggle: optionsToggle, setToggle: setOptionsToggle } =
    useToggle(false);

  const {
    username,
    createdAt,
    likes: { likeCount, likedBy },
    text,
    _id,
    profileImg,
    comments,
    userId,
    image = "",
  } = post;

  const navigateToUserProfile = (e) => {
    e.stopPropagation();
    navigate(`/profiles/${userId}`, { state: { from: browserLocation } });
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(`https://trippies.netlify.app/post/${_id}`);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div
      className="flex flex-row relative bg-transparent border-y border-slate-500 gap-3 p-3 text-white"
      onClick={() =>
        navigate(`/post/${_id}`, { state: { from: browserLocation } })
      }
    >
      <div
        className="profile-icon cursor-pointer"
        onClick={navigateToUserProfile}
      >
        <img
          className="w-full profile-icon object-cover "
          src={profileImg}
          alt={username}
          onError={(e) => (e.currentTarget.src = FALLBACK_IMG)}
        />
      </div>
      <div className="flex flex-col grow gap-4">
        <span className="flex flex-row gap-3 items-baseline">
          <h4
            className="font-openSans text-sm cursor-pointer font-semibold"
            onClick={navigateToUserProfile}
          >
            @{username}
          </h4>
          •
          <h5 className="text-xs font-openSans">
            {dayjs(new Date(createdAt)).format("ddd, DD MMM 'YY")}
          </h5>
        </span>
        <div className="text-xs flex flex-col sm:text-sm md:text-base whitespace-pre-wrap">
          <p>{text}</p>
          {image && (
            <img
              className="w-max max-h-90 mt-1 object-cover"
              src={image}
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          )}
        </div>
        <div
          className="w-full text-xs sm:text-base flex flex-row justify-between px-2 self-center "
          onClick={(e) => e.stopPropagation()}
        >
          <span className="flex items-center gap-1">
            <LikeButton postId={_id} likedBy={likedBy} location={location} />
            <p className="text-sm">{unitFormatter(likeCount)}</p>
          </span>
          <span className="flex items-center gap-1">
            <BiComment
              className="text-xl hover:text-sky-500 hover:md:scale-110 cursor-pointer "
              onClick={() => navigate(`/post/${_id}`, { state: "COMMENT" })}
            />
            <p className="text-sm">{unitFormatter(comments.length)}</p>
          </span>
          <FiShare
            className="text-xl hover:text-sky-500 hover:md:scale-110 cursor-pointer"
            onClick={copyToClipBoard}
          />
          <BookmarkButton postId={_id} />
        </div>
      </div>
      {authUsername === username && (
        <span
          className="absolute top-4 right-4"
          onClick={(e) => e.stopPropagation()}
        >
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
              className="hover:cursor-pointer text-sm sm:text-base w-full rounded-md p-1 flex items-center gap-1 hover:bg-slate-700 duration-100 ease-linear"
              onClick={() =>
                navigate(`/edit/${_id}`, {
                  state: { from: browserLocation },
                })
              }
            >
              <FaEdit />
              Edit
            </li>
            <li
              className="hover:cursor-pointer text-sm sm:text-base w-full text-red-500 flex rounded-md p-1 items-center gap-1 hover:bg-slate-700 duration-100 ease-linear"
              onClick={() => {
                deletePost(_id, token, dispatch);
                location === "POST" && navigate("/home");
              }}
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

export default PostCard;
