import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { loginData } = useContext(AuthContext);
  const location = useLocation();

  return loginData.isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
}

export default PrivateRoute;
