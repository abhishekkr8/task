import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  // Only store path, no query params for redirect
  const cleanPath = location.pathname;

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: cleanPath }} replace />
  );
};

export default PrivateRoute;
