import "./App.css";
import { useEffect } from "react";
import Router from "./router/Router";
import { TopBar } from "./components";
import { fetchAuthUserDetails } from "./services";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAuthUserDetails(token, dispatch);
  }, []);

  return (
    <div className="App">
      <TopBar />
      <Router />
    </div>
  );
}

export default App;
