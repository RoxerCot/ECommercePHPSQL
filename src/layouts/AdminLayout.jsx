import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import AdminNavbar from "../components/AdminNavbar";
import ComponentNavbar from "../components/ComponentNavbar";

const AdminLayout = () => {
  const { admin } = useUserContext();

  return admin ? (
    <div className="flex flex-row space-x-4 h-screen">
      <AdminNavbar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default AdminLayout;
