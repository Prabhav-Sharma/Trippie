import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiLoaderFill } from "../Utils/icons";
import { followUser, unfollowUser } from "../services";

function FollowButton({
  userId,
  styles = "rounded-l-2xl rounded-r-2xl text-base rounded-l-2xl rounded-r-2xl",
}) {
  const following = useSelector((state) => state.user.following);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  const followHandler = async (e) => {
    e.stopPropagation();
    setLoading(true);
    await followUser(userId, token, dispatch);
    setLoading(false);
  };

  const unfollowHandler = async (e) => {
    e.stopPropagation();
    setLoading(true);
    await unfollowUser(userId, token, dispatch);
    setLoading(false);
  };
  return following.some((user) => user._id === userId) ? (
    <button
      className={`flex justify-center bg-gray-200 text-blue-500 outline-2 outline outline-blue-500 ease-linear duration-100 hover:bg-white p-1.5 m-1 font-robotoFlex w-20 ${styles} `}
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
      className={`flex justify-center bg-blue-500 text-white hover:bg-blue-600 ease-linear duration-100 p-1.5 m-1 font-robotoFlex w-20 ${styles}`}
      onClick={followHandler}
    >
      {isLoading ? (
        <RiLoaderFill className="w-max animate-spin text-2xl" />
      ) : (
        "Follow"
      )}
    </button>
  );
}

export default FollowButton;
