import { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { TextInput, Feed, MiniUserCard } from "../components";
import { useDocumentTitle, useToggle } from "../hooks";
import { AiOutlineSearch } from "../Utils/icons";
import { queryPosts, queryUsers, debounce } from "../Utils/helpers";

function Search() {
  const { posts: allPosts, users: allUsers } = useSelector(
    (state) => state.appData
  );
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const { toggle: loading, setToggle: setLoading } = useToggle(false);

  const debouncedQueryPostsAndUsers = useCallback(debounce(handleChange), []);

  useDocumentTitle("Search");

  function handleChange(value) {
    setPosts(queryPosts(allPosts, value));
    setUsers(queryUsers(allUsers, value));
    setLoading(false);
  }

  return (
    <div className="flex flex-col gap-1.5">
      <h1 className="text-blue-500 font-semibold text-center text-xl md:text-2xl mb-2 translate-y-2 flex self-center items-center gap-2">
        Search
        <AiOutlineSearch className="font-bold text-2xl" />
      </h1>
      <TextInput
        styles=" sm:w-9/12 lg:w-7/12"
        value={search}
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
          setLoading(true);
          debouncedQueryPostsAndUsers(e.target.value);
        }}
      />
      {users.length !== 0 && (
        <>
          <h3 className="text-white p-2 md:text-xl">Users</h3>
          {users.map((user) => (
            <MiniUserCard key={user._id} user={user} />
          ))}
        </>
      )}
      {posts.length !== 0 && (
        <>
          <h3 className="text-white p-2 md:text-xl w-max">Posts</h3>
          <Feed posts={posts} />
        </>
      )}
      {search.trim().length !== 0 && users.length + posts.length === 0 && (
        <h1 className="text-white self-center my-4">
          {loading ? "Loading..." : "No results were returned."}
        </h1>
      )}
      {search.trim().length === 0 && (
        <img
          className=" w-4/5 md:w-2/5 self-center mt-4"
          src="https://res.cloudinary.com/carsmart/image/upload/v1653671632/Trippie/undraw_file_searching_re_3evy_wy2sig.svg"
          alt="Search"
        />
      )}
    </div>
  );
}

export default Search;
