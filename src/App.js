import "./App.css";
import { useEffect } from "react";
import Router from "./router/Router";
import { TopBar } from "./components";
import { fetchAuthUserDetails, fetchPosts } from "./services";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

function App() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAuthUserDetails(token, dispatch);
  }, []);

  useEffect(() => {
    fetchPosts(dispatch);
  }, []);

  return (
    <div className="App">
      <TopBar />
      <ToastContainer theme="dark" autoClose={750} limit="2" />
      <Router />
    </div>
  );
}

export default App;
