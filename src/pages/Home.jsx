import { useDocumentTitle } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import { PostFeed, NewPost } from "../components";
import { useEffect } from "react";
import { fetchPosts, fetchAuthUserDetails } from "../services";
function Home() {
  useDocumentTitle("Home");
  const posts = useSelector((state) => state.appData.posts);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPosts(dispatch);
  }, []);

  useEffect(() => {
    fetchAuthUserDetails(token, dispatch);
  }, []);

  return (
    <>
      <NewPost />
      <PostFeed posts={posts} />
    </>
  );
}

export default Home;
