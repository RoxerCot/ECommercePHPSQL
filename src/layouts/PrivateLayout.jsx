import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import AdminNavbar from "../components/AdminNavbar";
import ComponentNavbar from "../components/ComponentNavbar";

const PrivateLayout = () => {
  const { user, admin } = useUserContext();
  return user ? (
    <>
      {admin == 1 ? <AdminNavbar /> : <ComponentNavbar />}
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateLayout;
