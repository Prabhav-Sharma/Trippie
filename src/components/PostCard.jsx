import dayjs from "dayjs";
import { BiComment, FiShare } from "../Utils/icons";
import { LikeButton } from ".";
import BookmarkButton from "./PostButtons/BookmarkButton";
import { likeFormatter } from "../Utils/helpers";

function PostCard({ post }) {
  const {
    username,
    createdAt,
    likes: { likeCount, likedBy },
    content,
    _id,
    profileImg,
  } = post;

  return (
    <div className="flex flex-row bg-transparent border border-slate-500 gap-3 p-3 text-white">
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
        <div className="w-full  flex flex-row justify-between px-2 self-center ">
          <span className="flex items-center gap-1">
            <LikeButton postId={_id} likedBy={likedBy} />
            {likeFormatter(likeCount)}
          </span>
          <BiComment className="text-xl hover:text-sky-500 hover:md:scale-110 cursor-pointer " />
          <FiShare className="text-xl hover:text-sky-500 hover:md:scale-110 cursor-pointer" />
          <BookmarkButton postId={_id} />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
