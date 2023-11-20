import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import ComponentNavbar from "../components/UserNavbar";

const PrivateLayout = () => {
  const { user } = useUserContext();

  return user ? (
    <>
      <ComponentNavbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateLayout;
