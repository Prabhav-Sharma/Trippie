import { Route, Routes } from "react-router-dom";
import { Login, MockAPI, Signup } from "../pages";

function Router() {
  return (
    <Routes>
      <Route path="/mockman" element={<MockAPI />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Signup />} />
    </Routes>
  );
}

export default Router;
