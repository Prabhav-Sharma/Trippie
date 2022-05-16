import { MdLogout } from "../Utils/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux";

function LogoutButton({ styles = "" }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <button
      onClick={() => {
        dispatch(logout());
        navigate("/");
      }}
      className={`absolute flex gap-2 items-center text-white top-7 right-4 text-lg ${styles}`}
    >
      {username} <MdLogout className="align-sub text-2xl" />
    </button>
  );
}

export default LogoutButton;
