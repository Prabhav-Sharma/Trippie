import { useEffect } from "react";
import { useDocumentTitle } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import { Feed, NewContent } from "../components";
import { fetchPosts, addPost } from "../services";

function Home() {
  useDocumentTitle("Home");
  const posts = useSelector((state) => state.appData.posts);
  const token = useSelector((state) => state.auth.token);
  const following = useSelector((state) => state.user.following);
  const authUserId = useSelector((state) => state.user._id);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPosts(dispatch);
  }, []);

  const addPostHandler = async (text) => {
    return await addPost({ content: text.trim() }, token, dispatch);
  };

  return (
    <>
      <NewContent callback={addPostHandler} />
      <Feed
        finishText="Follow more users to see their posts!"
        posts={posts.filter(
          (post) =>
            following.some((user) => user._id === post.userId) ||
            post.userId === authUserId
        )}
      />
    </>
  );
}

export default Home;
