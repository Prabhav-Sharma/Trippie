import { Route, Routes } from "react-router-dom";
import { Layout } from "../components";
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
  Explore,
  Alerts,
} from "../pages";
import ProtectedRoute from "./ProtectedRoute";
import GuestRoutes from "./GuestRoutes";

function Router() {
  return (
    <Routes>
      <Route path="mockman" element={<MockAPI />} />
      <Route element={<GuestRoutes />}>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Signup />} />
      </Route>

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
        <Route
          path="explore"
          element={
            <Layout>
              <Explore />
            </Layout>
          }
        />

        <Route
          path="alerts"
          element={
            <Layout>
              <Alerts />
            </Layout>
          }
        />
      </Route>
    </Routes>
  );
}

export default Router;
