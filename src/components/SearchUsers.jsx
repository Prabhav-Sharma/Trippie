import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MiniUserCard, TextInput } from ".";
import { fetchUsers } from "../services";
import { debounce, queryUsers } from "../Utils/helpers";
import { useToggle } from "../hooks";

function SearchUsers() {
  const allUsers = useSelector((state) => state.appData.users);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const { toggle: loading, setToggle: setLoading } = useToggle(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUsers(dispatch);
  }, []);

  function handleChange(value) {
    setUsers(queryUsers(allUsers, value));
    setLoading(false);
  }

  const optimizedSearch = useCallback(debounce(handleChange));

  return (
    <aside className="hidden bg-transparent border-slate-400 border h-max max-h-72 overflow-y-clip p-1 lg:mt-2 lg:flex flex-col items-center">
      <div className=" flex flex-col w-80 p-2 ">
        <span
          className="self-end text-white cursor-pointer"
          onClick={() => setSearch("")}
        >
          Clear
        </span>
        <TextInput
          placeholder={"Search..."}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setLoading(true);
            optimizedSearch(e.target.value);
          }}
        />
      </div>
      {(search.trim().length !== 0 ? users : allUsers).map((user) => (
        <MiniUserCard key={user._id} user={user} />
      ))}
      {users.length === 0 && search.trim().length !== 0 && (
        <h1 className="text-white">
          {loading ? "loading..." : "No Users Found"}
        </h1>
      )}
      <div />
    </aside>
  );
}

export default SearchUsers;
