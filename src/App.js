import "./App.css";
import Router from "./router/Router";
import { TopBar } from "./components";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Router />
    </div>
  );
}

export default App;
