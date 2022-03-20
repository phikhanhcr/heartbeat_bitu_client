import { Navigate, Outlet } from "react-router-dom";
import useAuthentication from "../customHooks/useAuthentication";

function ProtectedRoute() {
  const { isAuthenticated } = useAuthentication();
  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"}/> 
}

export default ProtectedRoute;