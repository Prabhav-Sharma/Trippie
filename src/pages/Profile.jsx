import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { Feed, ProfileCard } from "../components";
import { useDocumentTitle } from "../hooks";
import { fetchAllUserPosts, fetchUserById } from "../services";

function Profile() {
  const { userId } = useParams();
  const allPosts = useSelector((state) => state.appData.posts);
  const { _id: authUserId, following } = useSelector((state) => state.user);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  useDocumentTitle(`${user.username ? "@" + user.username : "loading.."}`, [
    user,
  ]);

  useEffect(() => {
    authUserId === userId
      ? navigate("/profile")
      : fetchUserById(userId, setUser);
  }, [userId, following]);

  useEffect(() => {
    user.username && fetchAllUserPosts(user.username, setPosts);
  }, [allPosts, user]);

  return (
    <div className="flex flex-col w-full relative">
      {Object.keys(user).length !== 0 && (
        <ProfileCard user={user} postCount={posts.length} />
      )}
      <Feed posts={posts} />
      <Link
        to={location?.state?.from?.pathname || "/home"}
        className="absolute top-1 left-1 flex items-center gap-1 text-white"
      >
        <span className="text-3xl lg:text-5xl w-max -translate-y-1.5 h-min ml-2">
          ‹
        </span>
        Back
      </Link>
    </div>
  );
}

export default Profile;
