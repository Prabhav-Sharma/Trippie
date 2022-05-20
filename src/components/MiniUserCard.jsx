import { FollowButton } from ".";
import { useNavigate } from "react-router-dom";

function MiniUserCard({ user }) {
  const navigate = useNavigate();
  const { username, fullName, _id, profileImg } = user;

  return (
    <div
      className="flex flex-row items-center gap-1.5 w-full justify-between p-1.5 mx-1.5 m-1 border cursor-pointer border-slate-600"
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/profiles/${_id}`);
      }}
    >
      <div className="flex flex-row gap-1.5">
        <div className="profile-icon">
          <img className="rounded-full " src={profileImg} alt={username} />
        </div>
        <span className="flex flex-col  text-white">
          <h6 className="text-sm font-medium">{fullName}</h6>
          <p className="text-xs hover:cursor">@{username}</p>
        </span>
      </div>
      <FollowButton userId={_id} />
    </div>
  );
}

export default MiniUserCard;
