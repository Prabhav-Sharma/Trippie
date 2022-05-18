import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../services";
import { RiLoaderFill } from "../Utils/icons";

function MiniUserCard({ user }) {
  const { username, fullName, _id, profileImg } = user;
  const token = useSelector((state) => state.auth.token);
  const following = useSelector((state) => state.user.following);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  const followHandler = async () => {
    setLoading(true);
    await followUser(_id, token, dispatch);
    setLoading(false);
  };

  const unfollowHandler = async () => {
    setLoading(true);
    await unfollowUser(_id, token, dispatch);
    setLoading(false);
  };

  const FollowButton = () =>
    following.some((user) => user._id === _id) ? (
      <button
        className="basis-20 flex justify-center text-base bg-white text-blue-500 outline-2 outline outline-blue-500 p-1.5 m-1 font-robotoFlex w-20 rounded-l-2xl rounded-r-2xl "
        onClick={unfollowHandler}
      >
        {isLoading ? (
          <RiLoaderFill className="w-max animate-spin text-2xl" />
        ) : (
          "Following"
        )}
      </button>
    ) : (
      <button
        className="basis-20 flex justify-center text-base bg-blue-500 text-white p-1.5 m-1 font-robotoFlex w-20 rounded-sm rounded-l-2xl rounded-r-2xl"
        onClick={followHandler}
      >
        {isLoading ? (
          <RiLoaderFill className="w-max animate-spin text-2xl" />
        ) : (
          "Follow"
        )}
      </button>
    );

  return (
    <div className="flex flex-row items-center gap-1.5 w-full justify-between p-1.5 mx-1.5 m-1 border border-slate-600">
      <div className="flex flex-row gap-1.5">
        <div className="profile-icon">
          <img className="rounded-full " src={profileImg} alt={username} />
        </div>
        <span className="flex flex-col  text-white">
          <h6 className="text-sm font-medium">{fullName}</h6>
          <p className="text-xs hover:cursor">@{username}</p>
        </span>
      </div>
      <FollowButton />
    </div>
  );
}

export default MiniUserCard;
