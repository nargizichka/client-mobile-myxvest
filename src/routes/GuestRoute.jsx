import { Navigate } from "react-router-dom";

const GuestRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem("token"); 

  return !isAuthenticated ? element : <Navigate to="/profile" replace />;
};

export default GuestRoute;
