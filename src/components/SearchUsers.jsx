import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MiniUserCard, TextInput } from ".";
import { fetchUsers } from "../services";
import { debounce, queryUsers, searchForUsers } from "../Utils/helpers";

function SearchUsers() {
  const allUsers = useSelector((state) => state.appData.users);
  const authUserId = useSelector((state) => state.user._id);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchUsers(dispatch);
  }, []);

  function handleChange(value) {
    setUsers(queryUsers(allUsers, value));
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
            optimizedSearch(e.target.value);
          }}
        />
      </div>
      {(search.trim().length !== 0 ? users : allUsers).map((user) => (
        <MiniUserCard key={user._id} user={user} />
      ))}
      <div />
    </aside>
  );
}

export default SearchUsers;
