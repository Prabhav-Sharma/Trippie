import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import {
  Login,
  MockAPI,
  Signup,
  Home,
  Post,
  Edit,
  Bookmarks,
  UserProfile,
  Profile,
} from "../pages";
import ProtectedRoute from "./ProtectedRoute";

function Router() {
  return (
    <Routes>
      <Route path="mockman" element={<MockAPI />} />
      <Route path="login" element={<Login />} />
      <Route path="" element={<Signup />} />

      <Route element={<ProtectedRoute />}>
        <Route
          path="home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/post/:postId"
          element={
            <Layout>
              <Post />
            </Layout>
          }
        />
        {["/:postId", "/:postId/:commentId"].map((path, index) => (
          <Route
            key={index}
            path={`/edit${path}`}
            element={
              <Layout>
                <Edit />
              </Layout>
            }
          />
        ))}
        <Route
          path="bookmarks"
          element={
            <Layout>
              <Bookmarks />
            </Layout>
          }
        />
        <Route
          path="profile"
          element={
            <Layout>
              <UserProfile />
            </Layout>
          }
        />

        <Route
          path="/profiles/:userId"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
      </Route>
    </Routes>
  );
}

export default Router;
