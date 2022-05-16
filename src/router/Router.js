import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import { Login, MockAPI, Signup, Home } from "../pages";
import ProtectedRoute from "./ProtectedRoute";

function Router() {
  return (
    <Routes>
      <Route path="/mockman" element={<MockAPI />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Signup />} />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Route>
    </Routes>
  );
}

export default Router;
