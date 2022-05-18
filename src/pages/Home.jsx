import { useEffect } from "react";
import { useDocumentTitle } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import { Feed, NewContent } from "../components";
import { fetchPosts, fetchAuthUserDetails, addPost } from "../services";

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

  const addPostHandler = async (text) => {
    return await addPost({ content: text.trim() }, token, dispatch);
  };

  return (
    <>
      <NewContent callback={addPostHandler} />
      <Feed posts={posts} />
    </>
  );
}

export default Home;
