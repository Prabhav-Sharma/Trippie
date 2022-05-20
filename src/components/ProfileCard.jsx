import { useState } from "react";
import { useSelector } from "react-redux";
import { unitFormatter, urlSchemeRemover } from "../Utils/helpers";
import { FollowButton, ProfileEditModal } from ".";
import { FaEdit } from "../Utils/icons";

function ProfileCard({ user, postCount }) {
  const authUserId = useSelector((state) => state.user._id);
  const [showEditModal, setShowEditModal] = useState(false);
  const {
    profileImg = "https://camo.githubusercontent.com/e6f31db76aa258d4e26be8464f2dff9796d5cf59185976df02dd80ae6a60cc9e/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f7075672e737667",
    username,
    fullName,
    followers,
    following,
    portfolio,
    about,
    _id,
  } = user;

  return (
    <div className="w-full flex flex-col text-sm relative sm:text-base justify-center items-center gap-2 py-2 text-white border-slate-400 border">
      <div className=" w-20 sm:w-24 p-1 rounded-full bg-gray-200">
        <img className="rounded-full " src={profileImg} alt={username} />
      </div>
      <span className="flex flex-row gap-1 items-center">
        <h1 className="text-base sm:text-xl font-medium">{fullName}</h1>
        <h2 className="text-sm sm:text-base font-medium">(@{username})</h2>
      </span>
      <span className="flex flex-row items-center">
        {_id === authUserId ? (
          <button
            className="flex flex-row items-center justify-center gap-1 bg-blue-500 text-white hover:bg-blue-600 ease-linear duration-100 p-1.5 m-1 font-robotoFlex rounded-sm w-24"
            onClick={() => setShowEditModal(true)}
          >
            <FaEdit /> Edit
          </button>
        ) : (
          <FollowButton userId={_id} styles={"rounded-sm w-24"} />
        )}
      </span>
      <p className="max-w-lg text-center p-1">{about}</p>
      <a
        href={portfolio}
        target="_blank"
        className=" text-blue-400 self-center justify-self-center font-medium decoration-slice underline text-ellipsis overflow-hidden max-w-64 whitespace-nowrap"
      >
        {urlSchemeRemover(portfolio)}
      </a>
      <ul className="flex flex-row w-full justify-evenly">
        <li className="flex flex-col items-center">
          <p className="font-medium">{unitFormatter(following.length)}</p>
          <h3>Following</h3>
        </li>
        <li className="flex flex-col items-center">
          <p className="font-medium">{unitFormatter(followers.length)}</p>
          <h3>Followers</h3>
        </li>
        <li className="flex flex-col items-center">
          <p className="font-medium">{unitFormatter(postCount)}</p>
          <h3>Posts</h3>
        </li>
      </ul>
      <ProfileEditModal showState={{ showEditModal, setShowEditModal }} />
    </div>
  );
}

export default ProfileCard;
