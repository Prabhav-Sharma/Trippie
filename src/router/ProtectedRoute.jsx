import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";

function ProtectedRoute() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}

export default ProtectedRoute;
