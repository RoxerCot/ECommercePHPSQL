import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import Products from "../pages/Products";

const PrivateLayout = () => {
  const { user } = useUserContext();

  return user ? (
    <>
      <Products />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateLayout;
