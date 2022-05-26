import { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { TextInput, Feed, MiniUserCard } from "../components";
import { useDocumentTitle } from "../hooks";
import { AiOutlineSearch } from "../Utils/icons";
import { queryPosts, queryUsers, debounce } from "../Utils/helpers";

function Search() {
  const { posts: allPosts, users: allUsers } = useSelector(
    (state) => state.appData
  );
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  let debouncedQueryPostsAndUsers = useCallback(debounce(handleChange), []);

  useDocumentTitle("Search");

  function handleChange(value) {
    setPosts(queryPosts(allPosts, value));
    setUsers(queryUsers(allUsers, value));
  }

  return (
    <div className="flex flex-col gap-1.5">
      <h1 className="text-white text-center text-base md:text-xl translate-y-2 flex self-center items-center gap-2">
        Search
        <AiOutlineSearch />
      </h1>
      <TextInput
        styles=" sm:w-9/12 lg:w-7/12"
        value={search}
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
          debouncedQueryPostsAndUsers(e.target.value);
        }}
      />
      {users.length !== 0 && (
        <>
          <h3 className="text-white p-2 md:text-xl">Users</h3>
          {users.map((user) => (
            <MiniUserCard user={user} />
          ))}
        </>
      )}
      {posts.length !== 0 && (
        <>
          <h3 className="text-white p-2 md:text-xl w-max">Posts</h3>
          <Feed posts={posts} />
        </>
      )}
    </div>
  );
}

export default Search;
