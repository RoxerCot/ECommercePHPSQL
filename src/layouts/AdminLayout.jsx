import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import AdminNavbar from "../components/AdminSidebar";

const AdminLayout = () => {
  const { admin } = useUserContext();
  console.log(admin);
  return admin ? (
    <div className="flex flex-row space-x-4 ">
      <AdminNavbar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default AdminLayout;
