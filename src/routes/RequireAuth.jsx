import { Navigate, Outlet } from "react-router-dom";
import useAuthentication from "../customHooks/useAuthentication";

function CheckAuthLogin() {
  const { isAuthenticated } = useAuthentication();
  return !isAuthenticated ? <Outlet /> : <Navigate to={"/"} />;
}

export default CheckAuthLogin;
