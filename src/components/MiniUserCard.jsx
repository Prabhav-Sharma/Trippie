import { FollowButton } from ".";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FALLBACK_IMG } from "../Utils/constants";

function MiniUserCard({ user }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { username, fullName, _id, profileImg } = user;
  const authUserId = useSelector((state) => state.user._id);

  return (
    <div
      className="flex flex-row items-center gap-1.5 w-full justify-between p-1.5 my-1 border-y cursor-pointer border-slate-600"
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/profiles/${_id}`, { state: { from: location } });
      }}
    >
      <div className="flex flex-row gap-1.5">
        <div className="profile-icon">
          <img
            className="w-full profile-icon object-cover"
            src={profileImg}
            alt={username}
            onError={(e) => (e.currentTarget.src = FALLBACK_IMG)}
          />
        </div>
        <span className="flex flex-col  text-white">
          <h6 className="text-sm font-medium">{fullName}</h6>
          <p className="text-xs hover:cursor">@{username}</p>
        </span>
      </div>
      {authUserId !== _id && <FollowButton userId={_id} />}
    </div>
  );
}

export default MiniUserCard;
