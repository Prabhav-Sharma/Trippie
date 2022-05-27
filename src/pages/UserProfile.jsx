import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileCard, Feed, NewContent, ProfileEditModal } from "../components";
import { useDocumentTitle } from "../hooks";
import { fetchAllUserPosts, addPost } from "../services";

function UserProfile() {
  const AllPosts = useSelector((state) => state.appData.posts);
  const authUser = useSelector((state) => state.user);
  const [posts, setPosts] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useDocumentTitle("My Profile");

  useEffect(() => {
    fetchAllUserPosts(authUser.username, setPosts);
  }, [AllPosts]);

  const addPostHandler = async (content) => {
    return await addPost(content, token, dispatch);
  };

  return (
    <>
      <ProfileCard user={authUser} postCount={posts.length} />
      <NewContent callback={addPostHandler} />
      <Feed posts={posts} />
    </>
  );
}

export default UserProfile;
