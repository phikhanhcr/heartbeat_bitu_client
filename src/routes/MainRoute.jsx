import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";
import Register from "../components/Register/Register";
import ProtectedRoute from "./ProtectedRoute";
import CheckAuthLogin from "./RequireAuth";

function MainRouter() {
  return (
    <div>
      <>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </>
      <Routes>
        <Route element={<CheckAuthLogin />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default MainRouter;
