import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

function GuestRoutes() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <Navigate to="/home" replace /> : <Outlet />;
}

export default GuestRoutes;
